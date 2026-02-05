// Central story data with full metadata for search/filtering

export interface Story {
  slug: string
  title: string
  description: string
  ageGroup: 'toddlers' | 'early-readers'
  ageLabel: string
  ageRange: [number, number] // [min, max] years
  readingTime: string
  readingMinutes: number
  emoji: string
  themes: string[]
  tags: string[]
  characters: string[]
  keywords: string[] // SEO + search keywords
  coverImage?: string
  pages: { text: string; illustration?: string }[]
}

export const stories: Story[] = [
  {
    slug: 'luna-finds-her-blanket',
    title: 'Luna Finds Her Blanket',
    description: "Luna the lamb can't sleep without her favorite blanket. Join her cozy search!",
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🐑',
    themes: ['Comfort', 'Security', 'Bedtime'],
    tags: ['animals', 'lamb', 'blanket', 'searching', 'cozy', 'short'],
    characters: ['Luna'],
    keywords: ['lamb bedtime story', 'blanket story', 'toddler sleep story', 'comfort object story'],
    coverImage: '/illustrations/luna/luna-01-cover.png',
    pages: [
      { text: `Luna the little lamb could not sleep.\n\nWhere was her blanket?`, illustration: '/illustrations/luna/luna-02-worried.png' },
      { text: `Luna looked under the bed.\nNo blanket there.\nJust dust bunnies!`, illustration: '/illustrations/luna/luna-03-under-bed.png' },
      { text: `Luna looked in the toy box.\nNo blanket there.\nJust blocks and balls!`, illustration: '/illustrations/luna/luna-04-toybox.png' },
      { text: `Luna looked in the closet.\nNo blanket there.\nJust coats and boots!`, illustration: '/illustrations/luna/luna-05-closet.png' },
      { text: `Luna was sad.\nShe sat down.\nShe wanted her soft, blue blanket.`, illustration: '/illustrations/luna/luna-06-sad.png' },
      { text: `Then she saw something.\nSomething blue.\nSomething soft.\nIt was under her pillow!\n\n"There you are!" said Luna.`, illustration: '/illustrations/luna/luna-07-found.png' },
      { text: `Luna hugged her blanket tight.\nShe climbed into bed.\nShe closed her eyes.\n\nGoodnight, Luna.\nGoodnight, blanket.`, illustration: '/illustrations/luna/luna-08-goodnight.png' },
    ],
  },
  {
    slug: 'bop-the-bunny-says-goodnight',
    title: 'Bop the Bunny Says Goodnight',
    description: 'Bop says goodnight to everyone he loves before hopping into bed.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🐰',
    themes: ['Bedtime Routine', 'Family', 'Love'],
    tags: ['animals', 'bunny', 'rabbit', 'goodnight', 'family', 'routine', 'short'],
    characters: ['Bop', 'Mama', 'Papa', 'Teddy', 'Bubbles'],
    keywords: ['bunny bedtime story', 'goodnight story', 'bedtime routine toddler', 'saying goodnight'],
    pages: [
      { text: `Bop the bunny was getting sleepy.\nIt was time for bed!` },
      { text: `First, Bop said goodnight to Mama.\n"Goodnight, Mama!"\nMama gave Bop a big hug.` },
      { text: `Then, Bop said goodnight to Papa.\n"Goodnight, Papa!"\nPapa gave Bop a little kiss.` },
      { text: `Bop hopped to the window.\n"Goodnight, moon!"\nThe moon glowed soft and white.` },
      { text: `Bop hopped to his toy shelf.\n"Goodnight, teddy!"\nTeddy sat still and smiled.` },
      { text: `Bop hopped to his fish bowl.\n"Goodnight, Bubbles!"\nBubbles blew a tiny bubble.` },
      { text: `Bop climbed into his cozy bed.\nThe sheets were warm.\nThe pillow was soft.\n\nMama tucked him in.\nPapa turned off the light.` },
      { text: `"Goodnight, Bop," they whispered.\n\nBop wiggled his nose.\nBop closed his eyes.\nBop went to sleep.\n\nGoodnight, Bop.\nSweet dreams.` },
    ],
  },
  {
    slug: 'five-little-stars',
    title: 'Five Little Stars',
    description: 'Count the friendly stars as they watch over you and sing you to sleep.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '⭐',
    themes: ['Counting', 'Nighttime', 'Comfort'],
    tags: ['stars', 'counting', 'night sky', 'lullaby', 'educational', 'short'],
    characters: ['Five Stars'],
    keywords: ['counting bedtime story', 'star story for toddlers', 'numbers bedtime', 'night sky story'],
    pages: [
      { text: `Look up at the sky!\nDo you see the stars?\n\nLet's count them together.` },
      { text: `ONE little star says,\n"Hello, sleepy friend!"\nShe twinkles bright.` },
      { text: `TWO little stars say,\n"Time to rest your head!"\nThey dance together.` },
      { text: `THREE little stars say,\n"Close your tired eyes!"\nThey spin in circles.` },
      { text: `FOUR little stars say,\n"Dream of happy things!"\nThey make a square.` },
      { text: `FIVE little stars say,\n"We will watch over you!"\nThey shine so soft.` },
      { text: `One, two, three, four, five.\nFive little stars in the sky.\n\nThe stars hum a quiet song.\nMmmmm, mmmmm, mmmmm.` },
      { text: `Your eyes are getting heavy.\nYour body feels so warm.\nThe stars keep watch.\n\nOne... two... three... four... five...\n\nSleep now, little one.\nThe stars will be here.\nAll through the night.` },
    ],
  },
  {
    slug: 'pip-and-the-night-train',
    title: 'Pip and the Night Train',
    description: 'A brave little mouse rides the magical Dream Train to amazing places.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🚂',
    themes: ['Adventure', 'Imagination', 'Home'],
    tags: ['animals', 'mouse', 'train', 'adventure', 'dreams', 'magic', 'travel', 'home'],
    characters: ['Pip', 'Owl Conductor'],
    keywords: ['mouse adventure story', 'dream train story', 'bedtime adventure', 'imagination story kids'],
    pages: [
      { text: `Pip was a small mouse who lived in a tiny house by the railroad tracks.\n\nEvery night, when the stars came out, Pip heard the train go by.\n\nWHOOOOSH! CLICKETY-CLACK!` },
      { text: `"Where does it go?" Pip wondered.\n\nOne night, Pip decided to find out.` },
      { text: `He packed a small bag with cheese and crackers.\nHe put on his red scarf.\nHe waited by the tracks.` },
      { text: `WHOOOOSH! Here came the train!\n\nPip jumped on.` },
      { text: `The train car was full of soft, cozy seats.\nA friendly owl was the conductor.\n\n"Ticket, please," said the owl.\n\n"I don't have a ticket," said Pip. "I just want to see where the train goes."\n\nThe owl smiled. "Then you're in luck. This is the Dream Train. It goes wherever you imagine."` },
      { text: `Pip sat by the window. He closed his eyes and imagined.\n\nFirst, the train went to Cheese Mountain!\nGiant wheels of cheese rolled down the slopes.\nPip laughed and nibbled a tiny piece.` },
      { text: `Next, the train went to Balloon City!\nHouses floated in the sky, held up by colorful balloons.\nPip waved at the cloud people.` },
      { text: `Then, the train went to Blanket Beach!\nThe sand was made of the softest blankets.\nPip lay down and looked at the stars.` },
      { text: `"Last stop," said the owl conductor.\n\nPip looked out the window. He was home!\n\nHis tiny house sat by the tracks, just like always.\nThe light in the window glowed warm and yellow.` },
      { text: `"How did you know?" asked Pip.\n\n"The Dream Train always knows when you're ready to come home," said the owl.\n"The best adventures end in your own bed."` },
      { text: `Pip hopped off the train.\nHe walked inside.\nHe hung up his red scarf.` },
      { text: `He climbed into his cozy bed and pulled up the covers.\n\nOutside, he heard the train.\nWHOOOOSH! CLICKETY-CLACK!\n\nPip smiled. He knew where it was going.` },
      { text: `Wherever someone was dreaming.\n\nTHE END` },
    ],
  },
  {
    slug: 'the-girl-who-collected-clouds',
    title: 'The Girl Who Collected Clouds',
    description: 'Mira draws clouds in her notebook. One night, a cloud visits her back.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '☁️',
    themes: ['Kindness', 'Creativity', 'Sharing'],
    tags: ['clouds', 'drawing', 'art', 'kindness', 'sharing', 'helping', 'magic', 'girl'],
    characters: ['Mira', 'Cloud', 'Sam'],
    keywords: ['kindness story kids', 'sharing story', 'cloud story children', 'creative girl story'],
    pages: [
      { text: `Mira had an unusual hobby. She collected clouds.\n\nNot real clouds, of course. Mira drew every cloud she saw in her special blue notebook.\n\nPuffy clouds. Wispy clouds. Clouds shaped like dragons. Clouds shaped like ice cream cones. She had drawn two hundred and thirty-seven clouds!` },
      { text: `One evening, Mira sat on her roof watching the sunset. A small cloud floated right up to her!\n\n"Hello," said the cloud. Its voice was soft like a whisper.\n\nMira was surprised, but not scared. "Hello! I'm Mira. I collect clouds."\n\n"I know," said the cloud. "We've seen your drawings. They're beautiful."` },
      { text: `"Really?" Mira's heart felt warm.\n\n"Yes. But we have a problem. There's a little boy on the other side of town. His name is Sam. He's been sad for many days. He could really use a nice cloud."\n\n"What do you mean?" asked Mira.` },
      { text: `"Sometimes," said the cloud, "people need something soft and gentle to make them feel better. Will you help?"\n\nMira thought about this. She looked at her notebook full of clouds. She had so many. Maybe she could share.\n\n"What should I do?" she asked.` },
      { text: `"Draw him a cloud," said the cloud. "Draw one full of all the happy feelings you have. Then send it to him."\n\nMira got out her best crayons. She drew the fluffiest, most wonderful cloud she had ever made. She colored it pink and gold like the sunset. Inside the cloud, she wrote: "You are not alone."\n\nThe little cloud took the drawing and floated away into the night sky.` },
      { text: `The next day, something magical happened.\n\nMira found a note in her mailbox. It said: "Thank you for the cloud. I put it on my wall. When I look at it, I feel like everything will be okay. — Sam"\n\nMira smiled so big her cheeks hurt.` },
      { text: `That night, the little cloud came back.\n\n"There are more people who need clouds," it whispered.\n\nAnd so Mira started something new. Every night before bed, she drew one cloud for someone who needed it. Sad clouds for people who needed to cry. Silly clouds for people who needed to laugh. Brave clouds for people who were scared.` },
      { text: `She never ran out of clouds to give.\n\nBecause the more she shared, the more clouds she had.\n\nTHE END` },
    ],
  },
  {
    slug: 'the-sleepy-dragon',
    title: 'The Sleepy Dragon',
    description: "A dragon who can't sleep meets a tiny knight who knows just how to help.",
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🐉',
    themes: ['Friendship', 'Helping Others', 'Sleep'],
    tags: ['dragon', 'knight', 'friendship', 'helping', 'sleep', 'unlikely friends', 'magic'],
    characters: ['Ember', 'Penny'],
    keywords: ['dragon bedtime story', 'knight story kids', 'friendship story', 'cant sleep story'],
    pages: [
      { text: `Once there was a dragon named Ember who could not sleep.\n\nShe lived in a cozy cave in the mountains. She had a nice pile of gold to sleep on. She had a warm fire in her belly. But every night, Ember tossed and turned.\n\n"I'm so tired," Ember yawned. Her yawn made a little puff of smoke.` },
      { text: `One day, a tiny knight came to her cave. But this knight did not have a sword. She had a small bag.\n\n"Are you here to fight me?" asked Ember.\n\n"No," said the knight. Her name was Penny. "I heard you can't sleep. I'm here to help."` },
      { text: `Ember was confused. "Knights usually want to fight dragons."\n\n"I'm not that kind of knight," said Penny. "I'm a Sleep Knight. I help anyone who can't sleep. Even dragons."` },
      { text: `Penny opened her bag. Inside were many things: a soft blanket, a little book, some lavender flowers, and a music box.\n\n"Let's try some things," said Penny.` },
      { text: `First, she gave Ember the soft blanket. Ember wrapped it around herself. It felt nice, but she still couldn't sleep.\n\nNext, Penny put lavender flowers near Ember's nose. It smelled lovely, but Ember still couldn't sleep.` },
      { text: `Then Penny had an idea. "When did you last sleep well?"\n\nEmber thought hard. "When I was a baby. My mother used to hum to me."\n\nPenny wound up the music box. A gentle tune began to play. It sounded like a lullaby.\n\nEmber's eyes grew heavy.` },
      { text: `"She also used to tell me I was safe," Ember whispered.\n\nPenny sat beside the dragon. "You are safe, Ember. You can rest now."\n\nEmber felt her body relax. The music played. The blanket was warm. A friend was near.\n\nFor the first time in a long time, Ember slept.` },
      { text: `When she woke up, the sun was shining. Penny was still there, reading her little book.\n\n"You stayed," said Ember.\n\n"Of course," said Penny. "That's what friends do."` },
      { text: `From then on, Penny visited Ember every night. She wound the music box. She told Ember she was safe.\n\nAnd the dragon who couldn't sleep became the dragon who dreamed the most wonderful dreams.\n\nTHE END` },
    ],
  },
]

// Get all unique tags
export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  stories.forEach(story => story.tags.forEach(tag => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}

// Get all unique themes
export function getAllThemes(): string[] {
  const themeSet = new Set<string>()
  stories.forEach(story => story.themes.forEach(theme => themeSet.add(theme)))
  return Array.from(themeSet).sort()
}

// Get all unique characters
export function getAllCharacters(): string[] {
  const charSet = new Set<string>()
  stories.forEach(story => story.characters.forEach(char => charSet.add(char)))
  return Array.from(charSet).sort()
}

// Search stories
export function searchStories(query: string): Story[] {
  const q = query.toLowerCase().trim()
  if (!q) return stories
  
  return stories.filter(story => {
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

// Filter stories by tag
export function getStoriesByTag(tag: string): Story[] {
  return stories.filter(story => story.tags.includes(tag.toLowerCase()))
}

// Filter stories by theme
export function getStoriesByTheme(theme: string): Story[] {
  return stories.filter(story => story.themes.includes(theme))
}

// Filter stories by age group
export function getStoriesByAgeGroup(ageGroup: 'toddlers' | 'early-readers'): Story[] {
  return stories.filter(story => story.ageGroup === ageGroup)
}

// Get stories sorted A-Z
export function getStoriesAZ(): Story[] {
  return [...stories].sort((a, b) => a.title.localeCompare(b.title))
}

// Get story by slug
export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find(story => story.slug === slug)
}
