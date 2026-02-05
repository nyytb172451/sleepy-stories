import Link from 'next/link'

const stories = [
  {
    slug: 'luna-finds-her-blanket',
    title: 'Luna Finds Her Blanket',
    description: 'Luna the lamb can\'t sleep without her favorite blanket. Join her cozy search!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    emoji: '🐑',
    theme: 'Comfort & Security',
  },
  {
    slug: 'bop-the-bunny-says-goodnight',
    title: 'Bop the Bunny Says Goodnight',
    description: 'Bop says goodnight to everyone he loves before hopping into bed.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    emoji: '🐰',
    theme: 'Bedtime Routine',
  },
  {
    slug: 'five-little-stars',
    title: 'Five Little Stars',
    description: 'Count the friendly stars as they watch over you and sing you to sleep.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    emoji: '⭐',
    theme: 'Counting & Sleep',
  },
  {
    slug: 'pip-and-the-night-train',
    title: 'Pip and the Night Train',
    description: 'A brave little mouse rides the magical Dream Train to amazing places.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    emoji: '🚂',
    theme: 'Adventure & Home',
  },
  {
    slug: 'the-girl-who-collected-clouds',
    title: 'The Girl Who Collected Clouds',
    description: 'Mira draws clouds in her notebook. One night, a cloud visits her back.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    emoji: '☁️',
    theme: 'Kindness & Sharing',
  },
  {
    slug: 'the-sleepy-dragon',
    title: 'The Sleepy Dragon',
    description: 'A dragon who can\'t sleep meets a tiny knight who knows just how to help.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    emoji: '🐉',
    theme: 'Friendship & Comfort',
  },
]

export default function Home() {
  const toddlerStories = stories.filter(s => s.ageGroup === 'toddlers')
  const earlyReaderStories = stories.filter(s => s.ageGroup === 'early-readers')

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="text-6xl mb-4">🌙 ✨ 🌟</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sleepy Stories
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

function StoryCard({ story }: { story: typeof stories[0] }) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="story-card rounded-2xl overflow-hidden cursor-pointer h-full">
        {/* Image placeholder */}
        <div className="aspect-[4/3] illustration-placeholder">
          <span className="text-6xl">{story.emoji}</span>
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="age-badge">{story.ageLabel}</span>
            <span className="reading-time">🕐 {story.readingTime}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
          <p className="text-purple-200 text-sm mb-3">{story.description}</p>
          
          <div className="text-xs text-purple-400">
            {story.theme}
          </div>
        </div>
      </article>
    </Link>
  )
}
