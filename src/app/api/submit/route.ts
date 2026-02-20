import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

// Initialize Redis client (uses Vercel KV env vars)
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

// Simple profanity/inappropriate content filter
const BLOCKED_WORDS = [
  'kill', 'dead', 'death', 'die', 'blood', 'murder', 'weapon', 'gun', 'knife',
  'hate', 'stupid', 'dumb', 'idiot', 'ugly', 'fat', 'scary', 'horror', 'ghost',
  'demon', 'devil', 'hell', 'damn', 'sex', 'nude', 'naked', 'drug', 'alcohol',
  'beer', 'wine', 'drunk', 'cigarette', 'smoke', 'fight', 'punch', 'hit', 'hurt',
  'abuse', 'bully', 'mean', 'cruel', 'evil', 'monster', 'zombie', 'vampire',
]

function containsInappropriateContent(text: string): boolean {
  const lowerText = text.toLowerCase()
  return BLOCKED_WORDS.some(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i')
    return regex.test(lowerText)
  })
}

function sanitizeInput(text: string): string {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 300)
}

export async function POST(request: Request) {
  try {
    // Check if Redis is configured (supports both Vercel KV and direct Upstash)
    const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
    const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
    if (!redisUrl || !redisToken) {
      console.error('Redis not configured')
      return NextResponse.json({ error: 'Submissions temporarily unavailable' }, { status: 503 })
    }

    const body = await request.json()
    const { firstName, idea } = body

    // Validate inputs
    if (!firstName || !idea) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const sanitizedName = sanitizeInput(firstName).slice(0, 50)
    const sanitizedIdea = sanitizeInput(idea)

    // Check for inappropriate content
    if (containsInappropriateContent(sanitizedName) || containsInappropriateContent(sanitizedIdea)) {
      return NextResponse.json({ 
        error: 'Submission contains inappropriate content. Please keep it family-friendly!' 
      }, { status: 400 })
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      firstName: sanitizedName,
      idea: sanitizedIdea,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    }

    // Store submission in Redis list
    await redis.lpush('story_submissions', JSON.stringify(submission))

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Check if Redis is configured
    const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
    const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
    if (!redisUrl || !redisToken) {
      return NextResponse.json({ submissions: [], total: 0 })
    }

    // Get all submissions from Redis list
    const rawSubmissions = await redis.lrange('story_submissions', 0, -1)
    
    const submissions = rawSubmissions.map((s: string | object) => {
      if (typeof s === 'string') {
        return JSON.parse(s)
      }
      return s
    })

    // Filter for pending only
    const pending = submissions.filter((s: { status: string }) => s.status === 'pending')
    
    return NextResponse.json({ 
      submissions: pending,
      total: submissions.length 
    })
  } catch (error) {
    console.error('Get submissions error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
