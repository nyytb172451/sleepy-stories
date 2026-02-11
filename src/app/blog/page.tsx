import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog — Snoozy Stories',
  description: 'Tips for bedtime routines, story recommendations by age, and parenting advice for better sleep. Free resources from Snoozy Stories.',
  keywords: 'bedtime tips, toddler sleep, bedtime routine, kids bedtime stories blog',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Bedtime Stories Blog</h1>
      <p className="text-purple-200 mb-8">
        Tips, recommendations, and gentle wisdom for better bedtimes
      </p>

      <div className="space-y-6">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block story-card rounded-xl p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">📝</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-purple-200 mb-3">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-purple-400">
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Topics section */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h2 className="text-xl font-bold text-white mb-4">Popular Topics</h2>
        <div className="flex flex-wrap gap-2">
          {['5 minute stories', 'toddler bedtime', 'animal stories', 'bedtime routine', 'sleep tips'].map(topic => (
            <span 
              key={topic}
              className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 story-card rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Ready for Story Time?</h2>
        <p className="text-purple-200 mb-4">Browse our collection of free illustrated bedtime stories</p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition"
        >
          Browse Stories
        </Link>
      </div>
    </div>
  )
}
