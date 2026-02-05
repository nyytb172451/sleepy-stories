import Link from 'next/link'
import { notFound } from 'next/navigation'

// Story data - in production, this could come from a CMS or MDX files
const stories: Record<string, {
  title: string
  ageLabel: string
  readingTime: string
  theme: string
  pages: { text: string; illustration?: string }[]
}> = {
  'luna-finds-her-blanket': {
    title: 'Luna Finds Her Blanket',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    theme: 'Comfort & Security',
    pages: [
      {
        text: `Luna the little lamb could not sleep.

Where was her blanket?`,
      },
      {
        text: `Luna looked under the bed.
No blanket there.
Just dust bunnies!`,
      },
      {
        text: `Luna looked in the toy box.
No blanket there.
Just blocks and balls!`,
      },
      {
        text: `Luna looked in the closet.
No blanket there.
Just coats and boots!`,
      },
      {
        text: `Luna was sad.
She sat down.
She wanted her soft, blue blanket.`,
      },
      {
        text: `Then she saw something.
Something blue.
Something soft.
It was under her pillow!

"There you are!" said Luna.`,
      },
      {
        text: `Luna hugged her blanket tight.
She climbed into bed.
She closed her eyes.

Goodnight, Luna.
Goodnight, blanket.`,
      },
    ],
  },
  'pip-and-the-night-train': {
    title: 'Pip and the Night Train',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    theme: 'Adventure & Home',
    pages: [
      {
        text: `Pip was a small mouse who lived in a tiny house by the railroad tracks.

Every night, when the stars came out, Pip heard the train go by.

WHOOOOSH! CLICKETY-CLACK!`,
      },
      {
        text: `"Where does it go?" Pip wondered.

One night, Pip decided to find out.`,
      },
      {
        text: `He packed a small bag with cheese and crackers.
He put on his red scarf.
He waited by the tracks.`,
      },
      {
        text: `WHOOOOSH! Here came the train!

Pip jumped on.`,
      },
      {
        text: `The train car was full of soft, cozy seats.
A friendly owl was the conductor.

"Ticket, please," said the owl.

"I don't have a ticket," said Pip. "I just want to see where the train goes."

The owl smiled. "Then you're in luck. This is the Dream Train. It goes wherever you imagine."`,
      },
      {
        text: `Pip sat by the window. He closed his eyes and imagined.

First, the train went to Cheese Mountain!
Giant wheels of cheese rolled down the slopes.
Pip laughed and nibbled a tiny piece.`,
      },
      {
        text: `Next, the train went to Balloon City!
Houses floated in the sky, held up by colorful balloons.
Pip waved at the cloud people.`,
      },
      {
        text: `Then, the train went to Blanket Beach!
The sand was made of the softest blankets.
Pip lay down and looked at the stars.`,
      },
      {
        text: `"Last stop," said the owl conductor.

Pip looked out the window. He was home!

His tiny house sat by the tracks, just like always.
The light in the window glowed warm and yellow.`,
      },
      {
        text: `"How did you know?" asked Pip.

"The Dream Train always knows when you're ready to come home," said the owl.
"The best adventures end in your own bed."`,
      },
      {
        text: `Pip hopped off the train.
He walked inside.
He hung up his red scarf.`,
      },
      {
        text: `He climbed into his cozy bed and pulled up the covers.

Outside, he heard the train.
WHOOOOSH! CLICKETY-CLACK!

Pip smiled. He knew where it was going.`,
      },
      {
        text: `Wherever someone was dreaming.

THE END`,
      },
    ],
  },
  // Placeholder entries for other stories
  'bop-the-bunny-says-goodnight': {
    title: 'Bop the Bunny Says Goodnight',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    theme: 'Bedtime Routine',
    pages: [{ text: 'Story coming soon! 🐰' }],
  },
  'five-little-stars': {
    title: 'Five Little Stars',
    ageLabel: 'Ages 2-4',
    readingTime: '2 min',
    theme: 'Counting & Sleep',
    pages: [{ text: 'Story coming soon! ⭐' }],
  },
  'the-girl-who-collected-clouds': {
    title: 'The Girl Who Collected Clouds',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    theme: 'Kindness & Sharing',
    pages: [{ text: 'Story coming soon! ☁️' }],
  },
  'the-sleepy-dragon': {
    title: 'The Sleepy Dragon',
    ageLabel: 'Ages 5-7',
    readingTime: '5 min',
    theme: 'Friendship & Comfort',
    pages: [{ text: 'Story coming soon! 🐉' }],
  },
}

export function generateStaticParams() {
  return Object.keys(stories).map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const story = stories[params.slug]
  if (!story) return {}
  
  return {
    title: `${story.title} — Sleepy Stories`,
    description: `A ${story.readingTime} bedtime story for ${story.ageLabel}. ${story.theme}.`,
  }
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories[params.slug]
  
  if (!story) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition mb-8"
      >
        ← Back to all stories
      </Link>

      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="age-badge">{story.ageLabel}</span>
          <span className="reading-time">🕐 {story.readingTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {story.title}
        </h1>
        <p className="text-purple-300">{story.theme}</p>
      </header>

      {/* Story pages */}
      <article className="space-y-12">
        {story.pages.map((page, index) => (
          <section key={index} className="story-card rounded-2xl overflow-hidden">
            {/* Illustration placeholder */}
            <div className="aspect-[16/10] illustration-placeholder">
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <div>Illustration {index + 1}</div>
              </div>
            </div>
            
            {/* Text */}
            <div className="p-6 md:p-8">
              <div className="story-text whitespace-pre-line">
                {page.text}
              </div>
            </div>
          </section>
        ))}
      </article>

      {/* End card */}
      <div className="text-center mt-16 py-12 border-t border-white/10">
        <div className="text-4xl mb-4">🌙 ✨ 💤</div>
        <p className="text-purple-200 mb-6">Sweet dreams!</p>
        <Link 
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Read Another Story
        </Link>
      </div>
    </div>
  )
}
