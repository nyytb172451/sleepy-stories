'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { stories, Story } from '@/lib/stories'

export default function Home() {
  // Get 6 stories per age group for the carousels (newest first = reversed order)
  const toddlerStories = stories.filter(s => s.ageGroup === 'toddlers').reverse().slice(0, 6)
  const earlyReaderStories = stories.filter(s => s.ageGroup === 'early-readers').reverse().slice(0, 6)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="text-6xl mb-4">🌙 ✨ 🌟</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Snoozy Stories
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Beautiful bedtime stories to help your little ones drift off to dreamland.
          Free, calming, and made with love.
        </p>
      </section>

      {/* Toddler Stories */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white">For Little Ones</h2>
          <span className="age-badge">Ages 2-4</span>
        </div>
        <p className="text-purple-200 mb-8">
          Short, sweet stories with simple words and lots of repetition. Perfect for toddlers!
        </p>
        <StoryCarousel stories={toddlerStories} />
        <div className="text-center mt-6">
          <Link href="/search?age=toddlers" className="inline-block bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 hover:text-white px-6 py-2 rounded-full transition">
            See all toddler stories →
          </Link>
        </div>
      </section>

      {/* Early Reader Stories */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white">For Growing Readers</h2>
          <span className="age-badge">Ages 5-7</span>
        </div>
        <p className="text-purple-200 mb-8">
          Longer adventures with gentle lessons about home, friendship, and kindness.
        </p>
        <StoryCarousel stories={earlyReaderStories} />
        <div className="text-center mt-6">
          <Link href="/search?age=early-readers" className="inline-block bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 hover:text-white px-6 py-2 rounded-full transition">
            See all early reader stories →
          </Link>
        </div>
      </section>

      {/* Submit Ideas CTA */}
      <section className="mb-16 story-card rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">💡</div>
        <h2 className="text-2xl font-bold text-white mb-4">Have a Story Idea?</h2>
        <p className="text-purple-200 max-w-xl mx-auto mb-6">
          We'd love to hear your ideas! Every week, we pick our favorite submissions 
          and turn them into real illustrated bedtime stories. Your name will be 
          credited on the story page!
        </p>
        <Link
          href="/submit"
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          ✨ Submit Your Idea
        </Link>
      </section>

      {/* About */}
      <section className="text-center py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Sweet Dreams Start Here</h2>
        <p className="text-purple-200 max-w-2xl mx-auto">
          Every story is crafted to be calming, kind, and cozy. 
          No scary parts, no cliffhangers — just gentle tales that end with 
          warmth and safety. Perfect for winding down before sleep.
        </p>
      </section>
    </div>
  )
}

function StoryCarousel({ stories }: { stories: Story[] }) {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = Math.max(0, stories.length - visibleCount)
  
  const visibleStories = stories.slice(startIndex, startIndex + visibleCount)
  
  const canGoBack = startIndex > 0
  const canGoForward = startIndex < maxIndex

  return (
    <div className="relative">
      {/* Navigation buttons */}
      {canGoBack && (
        <button
          onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg transition"
          aria-label="Previous stories"
        >
          ←
        </button>
      )}
      
      {canGoForward && (
        <button
          onClick={() => setStartIndex(Math.min(maxIndex, startIndex + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg transition"
          aria-label="Next stories"
        >
          →
        </button>
      )}

      {/* Story cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {visibleStories.map(story => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>

      {/* Dots indicator */}
      {stories.length > visibleCount && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === startIndex ? 'bg-purple-400' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="story-card rounded-2xl overflow-hidden cursor-pointer h-full">
        {/* Thumbnail - use cover image or emoji fallback */}
        {story.coverImage ? (
          <div className="relative aspect-[4/3]">
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] illustration-placeholder">
            <span className="text-6xl">{story.emoji}</span>
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="age-badge">{story.ageLabel}</span>
            <span className="reading-time">🕐 {story.readingTime}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
          <p className="text-purple-200 text-sm mb-3">{story.description}</p>
          
          <div className="text-xs text-purple-400">
            {story.themes.slice(0, 2).join(' • ')}
          </div>
        </div>
      </article>
    </Link>
  )
}
