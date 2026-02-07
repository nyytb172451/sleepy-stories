'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubmitPage() {
  const [firstName, setFirstName] = useState('')
  const [idea, setIdea] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!firstName.trim() || !idea.trim()) {
      setError('Please fill in both fields.')
      return
    }

    if (idea.length > 300) {
      setError('Story idea must be 300 characters or less.')
      return
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), idea: idea.trim() })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-6">✨</div>
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-purple-200 mb-8">
          Your story idea has been submitted! We review submissions every week and pick 
          our favorites to turn into real bedtime stories. If your idea is chosen, 
          you'll see your name credited on the story page!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              setSubmitted(false)
              setFirstName('')
              setIdea('')
            }}
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Submit Another Idea
          </button>
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition mb-8"
      >
        ← Back to Stories
      </Link>

      <div className="text-center mb-10">
        <div className="text-5xl mb-4">💡</div>
        <h1 className="text-3xl font-bold text-white mb-4">Submit a Story Idea</h1>
        <p className="text-purple-200">
          Have a great idea for a bedtime story? Tell us about it! Every week, we choose 
          <strong className="text-yellow-300"> 2 story ideas</strong> from our community and turn them into 
          fully illustrated bedtime stories. If your idea is chosen, you&apos;ll be credited 
          by first name on the story page!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="story-card rounded-2xl p-6 md:p-8">
        <div className="mb-6">
          <label htmlFor="firstName" className="block text-white font-semibold mb-2">
            Your First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g., Emma"
            maxLength={50}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="idea" className="block text-white font-semibold mb-2">
            Your Story Idea
          </label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., A little owl who is afraid of the dark learns that nighttime is actually magical..."
            maxLength={300}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none"
          />
          <div className="text-right text-sm text-purple-400 mt-1">
            {idea.length}/300 characters
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-4 rounded-xl transition text-lg"
        >
          ✨ Submit My Idea
        </button>

        <p className="text-purple-400 text-sm text-center mt-4">
          By submitting, you agree that your idea may be used and adapted for a story on Snoozy Stories.
        </p>
      </form>

      {/* Guidelines */}
      <div className="mt-10 story-card rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">📝 Submission Guidelines</h2>
        <ul className="space-y-3 text-purple-200">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            Keep it family-friendly and appropriate for children ages 2-7
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            Focus on positive themes: friendship, kindness, courage, sleep, dreams
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            Include a character idea or a simple plot concept
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">✗</span>
            No scary content, violence, or anything inappropriate for bedtime
          </li>
        </ul>
      </div>
    </div>
  )
}
