'use client'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">About Snoozy Stories</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-purple-100 space-y-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">✨ Our Mission</h2>
            <p className="text-lg">
              Snoozy Stories creates free, original bedtime stories designed to help little ones drift off to 
              dreamland. Every story is crafted with care — featuring gentle adventures, cozy endings, and 
              beautiful illustrations that spark imagination without overstimulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">👨‍👩‍👧 Made for Families</h2>
            <p>
              We&apos;re parents too, and we know the bedtime struggle is real. That&apos;s why every Snoozy Story is:
            </p>
            <ul className="list-none mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌙</span>
                <span><strong>Calming:</strong> Gentle pacing and soothing themes to wind down busy minds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📖</span>
                <span><strong>Age-appropriate:</strong> Stories for toddlers (2-4) and early readers (5-7)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <span><strong>Beautifully illustrated:</strong> Warm, painterly artwork in every story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💯</span>
                <span><strong>100% original:</strong> Fresh stories you won&apos;t find anywhere else</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🆓</span>
                <span><strong>Always free:</strong> Quality bedtime stories for every family</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">💡 Your Ideas, Our Stories</h2>
            <p>
              The best story ideas come from families like yours! Each week, we select <strong>2 story ideas</strong> from 
              our community submissions and bring them to life with original writing and illustrations.
            </p>
            <p className="mt-3">
              If your idea is chosen, you&apos;ll see your first name credited on the story page. It&apos;s our way of 
              saying thank you for helping make bedtime magical for kids everywhere.
            </p>
            <div className="mt-4">
              <a 
                href="/submit" 
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-6 rounded-full transition-colors"
              >
                Submit Your Story Idea →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">📚 Our Collection</h2>
            <p>
              Snoozy Stories currently features <strong>26 original bedtime stories</strong> with more added 
              regularly. From sleepy dragons to dream libraries, night trains to lighthouse keepers — there&apos;s 
              a cozy adventure waiting for every child.
            </p>
            <div className="mt-4">
              <a 
                href="/stories" 
                className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Browse All Stories →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">💜 Thank You</h2>
            <p>
              Thank you for making Snoozy Stories part of your bedtime routine. Sweet dreams from our family to yours!
            </p>
          </section>

        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-yellow-300 hover:text-yellow-200 transition-colors">
            ← Back to Stories
          </a>
        </div>
      </div>
    </main>
  )
}
