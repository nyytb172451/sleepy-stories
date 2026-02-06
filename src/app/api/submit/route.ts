import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Simple profanity/inappropriate content filter
const BLOCKED_WORDS = [
  'kill', 'dead', 'death', 'die', 'blood', 'murder', 'weapon', 'gun', 'knife',
  'hate', 'stupid', 'dumb', 'idiot', 'ugly', 'fat', 'scary', 'horror', 'ghost',
  'demon', 'devil', 'hell', 'damn', 'sex', 'nude', 'naked', 'drug', 'alcohol',
  'beer', 'wine', 'drunk', 'cigarette', 'smoke', 'fight', 'punch', 'hit', 'hurt',
  'abuse', 'bully', 'mean', 'cruel', 'evil', 'monster', 'zombie', 'vampire',
  // Add more as needed
]

function containsInappropriateContent(text: string): boolean {
  const lowerText = text.toLowerCase()
  return BLOCKED_WORDS.some(word => {
    // Match whole words only
    const regex = new RegExp(`\\b${word}\\b`, 'i')
    return regex.test(lowerText)
  })
}

function sanitizeInput(text: string): string {
  // Remove any HTML tags, limit length
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 300)
}

export async function POST(request: Request) {
  try {
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
      status: 'pending' // pending, approved, rejected, published
    }

    // Store submission
    const dataDir = path.join(process.cwd(), 'data')
    const submissionsFile = path.join(dataDir, 'submissions.json')

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing submissions or start with empty array
    let submissions = []
    if (fs.existsSync(submissionsFile)) {
      const data = fs.readFileSync(submissionsFile, 'utf-8')
      submissions = JSON.parse(data)
    }

    // Add new submission
    submissions.push(submission)

    // Write back to file
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // Simple endpoint to check submissions (could be protected in production)
  try {
    const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json')
    
    if (!fs.existsSync(submissionsFile)) {
      return NextResponse.json({ submissions: [] })
    }

    const data = fs.readFileSync(submissionsFile, 'utf-8')
    const submissions = JSON.parse(data)
    
    return NextResponse.json({ 
      submissions: submissions.filter((s: any) => s.status === 'pending'),
      total: submissions.length 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
