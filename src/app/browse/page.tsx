import Link from 'next/link'
import { stories, getAllTags, getAllThemes, getAllCharacters } from '@/lib/stories'

export const metadata = {
  title: 'Browse Stories — Snoozy Stories',
  description: 'Browse bedtime stories by theme, tag, character, or age group.',
}

export default function BrowsePage() {
  const themes = getAllThemes()
  const tags = getAllTags()
  const characters = getAllCharacters()

  // Count stories per theme
  const themeCounts = themes.map(theme => ({
    name: theme,
    count: stories.filter(s => s.themes.includes(theme)).length,
  }))

  // Count stories per tag
  const tagCounts = tags.map(tag => ({
    name: tag,
    count: stories.filter(s => s.tags.includes(tag)).length,
  }))

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Browse Stories</h1>
      <p className="text-purple-200 mb-12">Explore stories by theme, tag, or character</p>

      {/* Age Groups */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>👶</span> By Age Group
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/search?age=toddlers" className="story-card rounded-xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧒</span>
              <div>
                <h3 className="font-bold text-white text-lg">Toddlers (Ages 2-4)</h3>
                <p className="text-purple-300 text-sm">
                  {stories.filter(s => s.ageGroup === 'toddlers').length} short, simple stories
                </p>
              </div>
            </div>
          </Link>
          <Link href="/search?age=early-readers" className="story-card rounded-xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-4">
              <span className="text-4xl">📚</span>
              <div>
                <h3 className="font-bold text-white text-lg">Early Readers (Ages 5-7)</h3>
                <p className="text-purple-300 text-sm">
                  {stories.filter(s => s.ageGroup === 'early-readers').length} longer adventures
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Themes */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>💭</span> By Theme
        </h2>
        <div className="flex flex-wrap gap-3">
          {themeCounts.map(({ name, count }) => (
            <Link
              key={name}
              href={`/search?theme=${encodeURIComponent(name)}`}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-indigo-600/40 border border-purple-500/30 text-white hover:from-purple-600/60 hover:to-indigo-600/60 transition"
            >
              {name}
              <span className="ml-2 text-purple-300 text-sm">({count})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>🏷️</span> By Tag
        </h2>
        <div className="flex flex-wrap gap-2">
          {tagCounts.map(({ name, count }) => (
            <Link
              key={name}
              href={`/search?tag=${encodeURIComponent(name)}`}
              className="px-3 py-1 rounded-lg bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white transition text-sm"
            >
              #{name}
              <span className="ml-1 text-purple-400">({count})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Characters */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>🎭</span> Meet the Characters
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {characters.map(character => {
            const story = stories.find(s => s.characters.includes(character))!
            return (
              <Link
                key={character}
                href={`/stories/${story.slug}`}
                className="story-card rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{story.emoji}</span>
                  <div>
                    <h3 className="font-bold text-white">{character}</h3>
                    <p className="text-purple-300 text-xs">from {story.title}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Reading Time */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>⏱️</span> By Reading Time
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/search?age=toddlers" className="story-card rounded-xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-4">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="font-bold text-white text-lg">Quick Stories (2 min)</h3>
                <p className="text-purple-300 text-sm">Perfect for tired little ones</p>
              </div>
            </div>
          </Link>
          <Link href="/search?age=early-readers" className="story-card rounded-xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-4">
              <span className="text-4xl">📖</span>
              <div>
                <h3 className="font-bold text-white text-lg">Longer Adventures (5 min)</h3>
                <p className="text-purple-300 text-sm">For cozy extended reading</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 border-t border-white/10">
        <p className="text-purple-200 mb-4">Can't decide? Try our search!</p>
        <Link
          href="/search"
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          🔍 Search All Stories
        </Link>
      </section>
    </div>
  )
}
