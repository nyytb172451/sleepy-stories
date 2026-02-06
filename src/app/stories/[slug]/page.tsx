import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { stories, getStoryBySlug, Story } from '@/lib/stories'

export function generateStaticParams() {
  return stories.map(story => ({ slug: story.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug)
  if (!story) return {}
  
  return {
    title: `${story.title} — Snoozy Stories`,
    description: `${story.description} A ${story.readingTime} bedtime story for ${story.ageLabel}. Themes: ${story.themes.join(', ')}.`,
    keywords: [...story.keywords, ...story.tags, story.title].join(', '),
  }
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug)
  
  if (!story) {
    notFound()
  }

  // Find related stories (same age group, different story)
  const relatedStories = stories
    .filter(s => s.ageGroup === story.ageGroup && s.slug !== story.slug)
    .slice(0, 2)

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link 
        href="/stories" 
        className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition mb-8"
      >
        ← All Stories
      </Link>

      {/* Header */}
      <header className="text-center mb-12">
        {story.coverImage ? (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
        ) : (
          <div className="text-6xl mb-4">{story.emoji}</div>
        )}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="age-badge">{story.ageLabel}</span>
          <span className="reading-time">🕐 {story.readingTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {story.title}
        </h1>
        <p className="text-purple-200 mb-4">{story.description}</p>
        
        {/* Themes */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {story.themes.map(theme => (
            <Link
              key={theme}
              href={`/search?theme=${encodeURIComponent(theme)}`}
              className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-sm hover:bg-purple-600/50 transition"
            >
              {theme}
            </Link>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {story.tags.map(tag => (
            <Link
              key={tag}
              href={`/search?tag=${encodeURIComponent(tag)}`}
              className="text-purple-400 text-sm hover:text-purple-200 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Story pages */}
      <article className="space-y-12">
        {story.pages.map((page, index) => (
          <section key={index} className="story-card rounded-2xl overflow-hidden">
            {/* Illustration - only show if available */}
            {page.illustration && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={page.illustration}
                  alt={`${story.title} - page ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            )}
            
            {/* Text */}
            <div className="p-6 md:p-8">
              <div className="story-text whitespace-pre-line">
                {page.text}
              </div>
            </div>
          </section>
        ))}
      </article>

      {/* Characters */}
      {story.characters.length > 0 && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-lg font-bold text-white mb-3">Characters in this story</h2>
          <div className="flex flex-wrap gap-2">
            {story.characters.map(character => (
              <span
                key={character}
                className="px-3 py-1 rounded-full bg-white/10 text-purple-200 text-sm"
              >
                {character}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related stories */}
      {relatedStories.length > 0 && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-lg font-bold text-white mb-4">You might also like</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedStories.map(related => (
              <Link
                key={related.slug}
                href={`/stories/${related.slug}`}
                className="story-card rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{related.emoji}</span>
                  <div>
                    <h3 className="font-bold text-white">{related.title}</h3>
                    <p className="text-purple-300 text-sm">{related.readingTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* End card */}
      <div className="text-center mt-16 py-12 border-t border-white/10">
        <div className="text-4xl mb-4">🌙 ✨ 💤</div>
        <p className="text-purple-200 mb-6">Sweet dreams!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/stories"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Read Another Story
          </Link>
          <Link 
            href="/search"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            🔍 Find a Story
          </Link>
        </div>
      </div>
    </div>
  )
}
