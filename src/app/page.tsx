import Link from 'next/link'
import Image from 'next/image'
import { stories, Story } from '@/lib/stories'

export default function Home() {
  // Get featured stories (first 3 of each age group)
  const toddlerStories = stories.filter(s => s.ageGroup === 'toddlers').slice(0, 6)
  const earlyReaderStories = stories.filter(s => s.ageGroup === 'early-readers').slice(0, 6)

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
        <div className="grid md:grid-cols-3 gap-6">
          {toddlerStories.map(story => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        {stories.filter(s => s.ageGroup === 'toddlers').length > 6 && (
          <div className="text-center mt-6">
            <Link href="/search?age=toddlers" className="text-purple-300 hover:text-white transition">
              View all toddler stories →
            </Link>
          </div>
        )}
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
        <div className="grid md:grid-cols-3 gap-6">
          {earlyReaderStories.map(story => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        {stories.filter(s => s.ageGroup === 'early-readers').length > 6 && (
          <div className="text-center mt-6">
            <Link href="/search?age=early-readers" className="text-purple-300 hover:text-white transition">
              View all early reader stories →
            </Link>
          </div>
        )}
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
