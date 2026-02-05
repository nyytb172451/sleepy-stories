import Link from 'next/link'
import { getStoriesAZ, Story } from '@/lib/stories'

export const metadata = {
  title: 'All Stories A-Z — Sleepy Stories',
  description: 'Browse all bedtime stories alphabetically. Find the perfect story for your little one.',
}

export default function StoriesIndexPage() {
  const storiesAZ = getStoriesAZ()
  
  // Group stories by first letter
  const grouped = storiesAZ.reduce((acc, story) => {
    const letter = story.title[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(story)
    return acc
  }, {} as Record<string, Story[]>)

  const letters = Object.keys(grouped).sort()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">All Stories A-Z</h1>
      <p className="text-purple-200 mb-8">
        {storiesAZ.length} bedtime stories and counting!
      </p>

      {/* Letter jump links */}
      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
        {letters.map(letter => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-purple-200 hover:bg-purple-600 hover:text-white transition font-semibold"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Stories by letter */}
      <div className="space-y-8">
        {letters.map(letter => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-600/30">
                {letter}
              </span>
              <span className="text-sm font-normal text-purple-300">
                {grouped[letter].length} {grouped[letter].length === 1 ? 'story' : 'stories'}
              </span>
            </h2>
            <div className="space-y-3">
              {grouped[letter].map(story => (
                <Link
                  key={story.slug}
                  href={`/stories/${story.slug}`}
                  className="block story-card rounded-xl p-4 hover:bg-white/10 transition"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{story.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{story.title}</h3>
                        <span className="age-badge text-xs">{story.ageLabel}</span>
                      </div>
                      <p className="text-purple-200 text-sm mb-2">{story.description}</p>
                      <div className="flex items-center gap-4 text-xs text-purple-400">
                        <span>🕐 {story.readingTime}</span>
                        <span>•</span>
                        <span>{story.themes.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Quick stats */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h2 className="text-xl font-bold text-white mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="story-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">{storiesAZ.length}</div>
            <div className="text-purple-300 text-sm">Total Stories</div>
          </div>
          <div className="story-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">
              {storiesAZ.filter(s => s.ageGroup === 'toddlers').length}
            </div>
            <div className="text-purple-300 text-sm">For Toddlers</div>
          </div>
          <div className="story-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">
              {storiesAZ.filter(s => s.ageGroup === 'early-readers').length}
            </div>
            <div className="text-purple-300 text-sm">For Early Readers</div>
          </div>
          <div className="story-card rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">
              {new Set(storiesAZ.flatMap(s => s.characters)).size}
            </div>
            <div className="text-purple-300 text-sm">Characters</div>
          </div>
        </div>
      </div>
    </div>
  )
}
