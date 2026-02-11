import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} — Snoozy Stories`,
    description: post.description,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    }
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blog" className="text-purple-400 hover:text-white transition">
          ← Back to Blog
        </Link>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-purple-300">
          <span>{post.readingTime}</span>
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </time>
        </div>
      </header>

      {/* Article content */}
      <article 
        className="prose prose-invert prose-purple max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-purple-100 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-purple-400 prose-a:hover:text-white prose-a:transition
          prose-strong:text-white
          prose-ul:text-purple-100 prose-ol:text-purple-100
          prose-li:mb-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="text-sm font-semibold text-purple-300 mb-3">Related Topics</h3>
        <div className="flex flex-wrap gap-2">
          {post.keywords.map(keyword => (
            <span 
              key={keyword}
              className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-200 text-sm"
            >
              {keyword}
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

      {/* More posts */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">More from the Blog</h3>
        <div className="space-y-4">
          {getAllBlogPosts()
            .filter(p => p.slug !== post.slug)
            .slice(0, 2)
            .map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block story-card rounded-lg p-4 hover:bg-white/10 transition"
              >
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-purple-300 text-sm mt-1">{p.readingTime}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
