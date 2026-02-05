'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { stories, getAllTags, getAllThemes, Story } from '@/lib/stories'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('')
  const [selectedTheme, setSelectedTheme] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string>('')

  const allThemes = getAllThemes()
  const allTags = getAllTags()

  const filteredStories = useMemo(() => {
    let results = [...stories]

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase()
      results = results.filter(story => {
        const searchable = [
          story.title,
          story.description,
          ...story.themes,
          ...story.tags,
          ...story.characters,
          ...story.keywords,
        ].join(' ').toLowerCase()
        return searchable.includes(q)
      })
    }

    // Age group filter
    if (selectedAgeGroup) {
      results = results.filter(story => story.ageGroup === selectedAgeGroup)
    }

    // Theme filter
    if (selectedTheme) {
      results = results.filter(story => story.themes.includes(selectedTheme))
    }

    // Tag filter
    if (selectedTag) {
      results = results.filter(story => story.tags.includes(selectedTag))
    }

    return results
  }, [query, selectedAgeGroup, selectedTheme, selectedTag])

  const clearFilters = () => {
    setQuery('')
    setSelectedAgeGroup('')
    setSelectedTheme('')
    setSelectedTag('')
  }

  const hasFilters = query || selectedAgeGroup || selectedTheme || selectedTag

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Search Stories</h1>
      <p className="text-purple-200 mb-8">Find the perfect bedtime story</p>

      {/* Search box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, character, theme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
        />
      </div>

      {/* Filters */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <select
          value={selectedAgeGroup}
          onChange={(e) => setSelectedAgeGroup(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400"
        >
          <option value="">All Ages</option>
          <option value="toddlers">Ages 2-4 (Toddlers)</option>
          <option value="early-readers">Ages 5-7 (Early Readers)</option>
        </select>

        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400"
        >
          <option value="">All Themes</option>
          {allThemes.map(theme => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400"
        >
          <option value="">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Active filters */}
      {hasFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-purple-300 text-sm">Active filters:</span>
          {query && (
            <span className="px-2 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
              "{query}"
            </span>
          )}
          {selectedAgeGroup && (
            <span className="px-2 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
              {selectedAgeGroup === 'toddlers' ? 'Ages 2-4' : 'Ages 5-7'}
            </span>
          )}
          {selectedTheme && (
            <span className="px-2 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
              {selectedTheme}
            </span>
          )}
          {selectedTag && (
            <span className="px-2 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
              #{selectedTag}
            </span>
          )}
          <button
            onClick={clearFilters}
            className="text-purple-400 hover:text-white text-sm underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="text-purple-300 mb-6">
        {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
      </p>

      {/* Results */}
      {filteredStories.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(story => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-purple-200">No stories match your search.</p>
          <button
            onClick={clearFilters}
            className="mt-4 text-purple-400 hover:text-white underline"
          >
            Clear filters and try again
          </button>
        </div>
      )}
    </div>
  )
}

function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="story-card rounded-2xl overflow-hidden cursor-pointer h-full">
        <div className="aspect-[4/3] illustration-placeholder">
          <span className="text-5xl">{story.emoji}</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="age-badge">{story.ageLabel}</span>
            <span className="reading-time">🕐 {story.readingTime}</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
          <p className="text-purple-200 text-sm mb-3">{story.description}</p>
          <div className="flex flex-wrap gap-1">
            {story.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-purple-400">#{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
