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
  ideaCredit?: string // First name of person who submitted the idea
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
      { text: `Luna looked under the bed.\nNo blanket there.\nJust dust bunnies!` },
      { text: `Luna looked in the toy box.\nNo blanket there.\nJust blocks and balls!` },
      { text: `Luna looked in the closet.\nNo blanket there.\nJust coats and boots!` },
      { text: `Luna was sad.\nShe sat down.\nShe wanted her soft, blue blanket.` },
      { text: `Then she saw something.\nSomething blue.\nSomething soft.\nIt was under her pillow!\n\n"There you are!" said Luna.`, illustration: '/illustrations/luna/luna-07-found.png' },
      { text: `Luna hugged her blanket tight.\nShe climbed into bed.\nShe closed her eyes.\n\nGoodnight, Luna.\nGoodnight, blanket.` },
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
    coverImage: '/illustrations/bop-the-bunny-says-goodnight/bop-the-bunny-says-goodnight-01-cover.png',
    pages: [
      { text: `Bop the bunny was getting sleepy.\nIt was time for bed!`, illustration: '/illustrations/bop-the-bunny-says-goodnight/bop-the-bunny-says-goodnight-02-scene.png' },
      { text: `First, Bop said goodnight to Mama.\n"Goodnight, Mama!"\nMama gave Bop a big hug.` },
      { text: `Then, Bop said goodnight to Papa.\n"Goodnight, Papa!"\nPapa gave Bop a little kiss.` },
      { text: `Bop hopped to the window.\n"Goodnight, moon!"\nThe moon glowed soft and white.` },
      { text: `Bop hopped to his toy shelf.\n"Goodnight, teddy!"\nTeddy sat still and smiled.` },
      { text: `Bop hopped to his fish bowl.\n"Goodnight, Bubbles!"\nBubbles blew a tiny bubble.` },
      { text: `Bop climbed into his cozy bed.\nThe sheets were warm.\nThe pillow was soft.\n\nMama tucked him in.\nPapa turned off the light.` },
      { text: `"Goodnight, Bop," they whispered.\n\nBop wiggled his nose.\nBop closed his eyes.\nBop went to sleep.\n\nGoodnight, Bop.\nSweet dreams.`, illustration: '/illustrations/bop-the-bunny-says-goodnight/bop-the-bunny-says-goodnight-03-scene.png' },
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
    coverImage: '/illustrations/five-little-stars/five-little-stars-01-cover.png',
    pages: [
      { text: `Look up at the sky!\nDo you see the stars?\n\nLet's count them together.`, illustration: '/illustrations/five-little-stars/five-little-stars-02-scene.png' },
      { text: `ONE little star says,\n"Hello, sleepy friend!"\nShe twinkles bright.` },
      { text: `TWO little stars say,\n"Time to rest your head!"\nThey dance together.` },
      { text: `THREE little stars say,\n"Close your tired eyes!"\nThey spin in circles.` },
      { text: `FOUR little stars say,\n"Dream of happy things!"\nThey make a square.` },
      { text: `FIVE little stars say,\n"We will watch over you!"\nThey shine so soft.` },
      { text: `One, two, three, four, five.\nFive little stars in the sky.\n\nThe stars hum a quiet song.\nMmmmm, mmmmm, mmmmm.` },
      { text: `Your eyes are getting heavy.\nYour body feels so warm.\nThe stars keep watch.\n\nOne... two... three... four... five...\n\nSleep now, little one.\nThe stars will be here.\nAll through the night.`, illustration: '/illustrations/five-little-stars/five-little-stars-03-scene.png' },
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
    coverImage: '/illustrations/pip/pip-01-cover.png',
    pages: [
      { text: `Pip was a small mouse who lived in a tiny house by the railroad tracks.\n\nEvery night, when the stars came out, Pip heard the train go by.\n\nWHOOOOSH! CLICKETY-CLACK!`, illustration: '/illustrations/pip/pip-02-home.png' },
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
      { text: `He climbed into his cozy bed and pulled up the covers.\n\nOutside, he heard the train.\nWHOOOOSH! CLICKETY-CLACK!\n\nPip smiled. He knew where it was going.`, illustration: '/illustrations/pip/pip-13-sleeping.png' },
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
    coverImage: '/illustrations/clouds/clouds-01-cover.png',
    pages: [
      { text: `Mira had an unusual hobby. She collected clouds.\n\nNot real clouds, of course. Mira drew every cloud she saw in her special blue notebook.\n\nPuffy clouds. Wispy clouds. Clouds shaped like dragons. Clouds shaped like ice cream cones. She had drawn two hundred and thirty-seven clouds!`, illustration: '/illustrations/clouds/clouds-02-collecting.png' },
      { text: `One evening, Mira sat on her roof watching the sunset. A small cloud floated right up to her!\n\n"Hello," said the cloud. Its voice was soft like a whisper.\n\nMira was surprised, but not scared. "Hello! I'm Mira. I collect clouds."\n\n"I know," said the cloud. "We've seen your drawings. They're beautiful."` },
      { text: `"Really?" Mira's heart felt warm.\n\n"Yes. But we have a problem. There's a little boy on the other side of town. His name is Sam. He's been sad for many days. He could really use a nice cloud."\n\n"What do you mean?" asked Mira.` },
      { text: `"Sometimes," said the cloud, "people need something soft and gentle to make them feel better. Will you help?"\n\nMira thought about this. She looked at her notebook full of clouds. She had so many. Maybe she could share.\n\n"What should I do?" she asked.` },
      { text: `"Draw him a cloud," said the cloud. "Draw one full of all the happy feelings you have. Then send it to him."\n\nMira got out her best crayons. She drew the fluffiest, most wonderful cloud she had ever made. She colored it pink and gold like the sunset. Inside the cloud, she wrote: "You are not alone."\n\nThe little cloud took the drawing and floated away into the night sky.` },
      { text: `The next day, something magical happened.\n\nMira found a note in her mailbox. It said: "Thank you for the cloud. I put it on my wall. When I look at it, I feel like everything will be okay. — Sam"\n\nMira smiled so big her cheeks hurt.` },
      { text: `That night, the little cloud came back.\n\n"There are more people who need clouds," it whispered.\n\nAnd so Mira started something new. Every night before bed, she drew one cloud for someone who needed it. Sad clouds for people who needed to cry. Silly clouds for people who needed to laugh. Brave clouds for people who were scared.` },
      { text: `She never ran out of clouds to give.\n\nBecause the more she shared, the more clouds she had.\n\nTHE END`, illustration: '/illustrations/clouds/clouds-08-multiplying.png' },
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
    coverImage: '/illustrations/dragon/dragon-01-cover.png',
    pages: [
      { text: `Once there was a dragon named Ember who could not sleep.\n\nShe lived in a cozy cave in the mountains. She had a nice pile of gold to sleep on. She had a warm fire in her belly. But every night, Ember tossed and turned.\n\n"I'm so tired," Ember yawned. Her yawn made a little puff of smoke.`, illustration: '/illustrations/dragon/dragon-02-cant-sleep.png' },
      { text: `One day, a tiny knight came to her cave. But this knight did not have a sword. She had a small bag.\n\n"Are you here to fight me?" asked Ember.\n\n"No," said the knight. Her name was Penny. "I heard you can't sleep. I'm here to help."` },
      { text: `Ember was confused. "Knights usually want to fight dragons."\n\n"I'm not that kind of knight," said Penny. "I'm a Sleep Knight. I help anyone who can't sleep. Even dragons."` },
      { text: `Penny opened her bag. Inside were many things: a soft blanket, a little book, some lavender flowers, and a music box.\n\n"Let's try some things," said Penny.` },
      { text: `First, she gave Ember the soft blanket. Ember wrapped it around herself. It felt nice, but she still couldn't sleep.\n\nNext, Penny put lavender flowers near Ember's nose. It smelled lovely, but Ember still couldn't sleep.` },
      { text: `Then Penny had an idea. "When did you last sleep well?"\n\nEmber thought hard. "When I was a baby. My mother used to hum to me."\n\nPenny wound up the music box. A gentle tune began to play. It sounded like a lullaby.\n\nEmber's eyes grew heavy.` },
      { text: `"She also used to tell me I was safe," Ember whispered.\n\nPenny sat beside the dragon. "You are safe, Ember. You can rest now."\n\nEmber felt her body relax. The music played. The blanket was warm. A friend was near.\n\nFor the first time in a long time, Ember slept.` },
      { text: `When she woke up, the sun was shining. Penny was still there, reading her little book.\n\n"You stayed," said Ember.\n\n"Of course," said Penny. "That's what friends do."` },
      { text: `From then on, Penny visited Ember every night. She wound the music box. She told Ember she was safe.\n\nAnd the dragon who couldn't sleep became the dragon who dreamed the most wonderful dreams.\n\nTHE END`, illustration: '/illustrations/dragon/dragon-09-ending.png' },
    ],
  },
  {
    slug: 'tiny-turtle-takes-a-bath',
    title: 'Tiny Turtle Takes a Bath',
    description: 'Tiny Turtle doesn\'t want a bath... until the bubbles come!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🐢',
    themes: ['Bath Time', 'Routine', 'Fun'],
    tags: ['turtle', 'bath', 'bubbles', 'routine', 'water'],
    characters: ['Tiny Turtle'],
    keywords: ['tiny turtle takes a bath', 'toddler bedtime story'],
    coverImage: '/illustrations/tiny-turtle-takes-a-bath/tiny-turtle-takes-a-bath-01-cover.png',
    pages: [
      { text: `Tiny Turtle did not want a bath.

"No bath!" said Tiny Turtle.
"Too wet! Too cold!"

But Mama Turtle smiled.
"Wait and see," she said.`, illustration: '/illustrations/tiny-turtle-takes-a-bath/tiny-turtle-takes-a-bath-02-scene.png' },
      { text: `Mama turned on the water.
Splash, splash, splash!

She added something special.
Bubbles!

Big bubbles.
Small bubbles.
So many bubbles!` },
      { text: `Tiny Turtle looked.
Tiny Turtle touched.
Pop! Pop! Pop!

"More bubbles!" said Tiny Turtle.

He climbed right in.
Splish! Splash!`, illustration: '/illustrations/tiny-turtle-takes-a-bath/tiny-turtle-takes-a-bath-03-scene.png' },
      { text: `Tiny Turtle played and played.
He made a bubble hat.
He made a bubble beard.
He was a bubble monster!

So much fun.

"All done," said Mama.

"More bath tomorrow?" asked Tiny Turtle.

Yes. More bath tomorrow.

Goodnight, Tiny Turtle.` }
    ],
  },
  {
    slug: 'the-sleepy-sloth',
    title: 'The Sleepy Sloth',
    description: 'Sam the Sloth is the slowest... and the sleepiest!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🦥',
    themes: ['Sleep', 'Slowness', 'Peace'],
    tags: ['sloth', 'slow', 'peaceful', 'jungle', 'sleep'],
    characters: ['Sam the Sloth'],
    keywords: ['the sleepy sloth', 'toddler bedtime story'],
    coverImage: '/illustrations/the-sleepy-sloth/the-sleepy-sloth-01-cover.png',
    pages: [
      { text: `Sam the Sloth was slow.

So slow.

The slowest in the whole jungle.` },
      { text: `The monkeys swung fast.
The birds flew fast.
The frogs jumped fast.

But Sam?

Sam was slooooow.`, illustration: '/illustrations/the-sleepy-sloth/the-sleepy-sloth-02-scene.png' },
      { text: `"Why so slow?" asked the monkey.

Sam smiled.
"I'm not slow," he said.
"I'm... peaceful."

Sam closed his eyes.
He yawned a big yawn.`, illustration: '/illustrations/the-sleepy-sloth/the-sleepy-sloth-03-scene.png' },
      { text: `"Being slow is nice," said Sam.
"I see the pretty flowers.
I feel the soft breeze.
I hear the quiet sounds."

The monkey stopped.
The monkey listened.
The jungle was quiet.
The jungle was peaceful.

"Maybe slow is good," said the monkey.

Sam was already asleep.

Goodnight, Sam.
Sweet, slow dreams.` }
    ],
  },
  {
    slug: 'where-is-bear',
    title: 'Where Is Bear?',
    description: 'Teddy Bear is hiding! Can you find him?',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🧸',
    themes: ['Hide and Seek', 'Comfort', 'Finding'],
    tags: ['teddy bear', 'hiding', 'searching', 'bedtime', 'toy'],
    characters: ['Teddy Bear', 'Child'],
    keywords: ['where is bear', 'toddler bedtime story'],
    coverImage: '/illustrations/where-is-bear/where-is-bear-01-cover.png',
    pages: [
      { text: `Where is Bear?

Bear is hiding!

Let's find him.` },
      { text: `Is Bear under the blanket?
Lift it up!

No Bear.
Just a pillow.`, illustration: '/illustrations/where-is-bear/where-is-bear-02-scene.png' },
      { text: `Is Bear behind the curtain?
Peek!

No Bear.
Just the window.

Is Bear in the closet?
Open it!

No Bear.
Just shoes and coats.`, illustration: '/illustrations/where-is-bear/where-is-bear-03-scene.png' },
      { text: `Where could Bear be?

Wait...

What's that in your arms?

BEAR!

Bear was with you the whole time!

Silly Bear.
Silly you.

Time for bed.
You and Bear.
Together.

Goodnight.` }
    ],
  },
  {
    slug: 'night-night-farm',
    title: 'Night Night, Farm',
    description: 'Say goodnight to all the farm animals as they go to sleep.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🐄',
    themes: ['Goodnight', 'Farm', 'Animals'],
    tags: ['farm', 'animals', 'goodnight', 'cow', 'pig', 'chicken'],
    characters: ['Cow', 'Pig', 'Chicken', 'Horse', 'Sheep'],
    keywords: ['night night farm', 'toddler bedtime story'],
    coverImage: '/illustrations/night-night-farm/night-night-farm-01-cover.png',
    pages: [
      { text: `The sun is going down.
The farm is getting quiet.

Time to say goodnight.` },
      { text: `Night night, cow.
Moo, moo.
The cow lies in the soft hay.

Night night, pig.
Oink, oink.
The pig curls up in the warm mud.

Night night, chicken.
Cluck, cluck.
The chicken fluffs her feathers.`, illustration: '/illustrations/night-night-farm/night-night-farm-02-scene.png' },
      { text: `Night night, horse.
Neigh, neigh.
The horse rests in the big barn.

Night night, sheep.
Baa, baa.
The sheep snuggles with her lamb.`, illustration: '/illustrations/night-night-farm/night-night-farm-03-scene.png' },
      { text: `The moon is up.
The stars are out.
The farm is asleep.

Night night, farm.
Night night, animals.
Night night, you.

Sweet dreams.` }
    ],
  },
  {
    slug: 'one-more-hug',
    title: 'One More Hug',
    description: 'Baby Bear wants just one more hug before bed.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🤗',
    themes: ['Hugs', 'Love', 'Bedtime'],
    tags: ['bear', 'hugs', 'love', 'bedtime', 'parent'],
    characters: ['Baby Bear', 'Mama Bear', 'Papa Bear'],
    keywords: ['one more hug', 'toddler bedtime story'],
    coverImage: '/illustrations/one-more-hug/one-more-hug-01-cover.png',
    pages: [
      { text: `"Time for bed," said Mama Bear.

"One more hug?" asked Baby Bear.

Mama Bear gave a big, warm hug.
Squeeze!`, illustration: '/illustrations/one-more-hug/one-more-hug-02-scene.png' },
      { text: `"Time for bed," said Papa Bear.

"One more hug?" asked Baby Bear.

Papa Bear gave a big, soft hug.
Squeeze!`, illustration: '/illustrations/one-more-hug/one-more-hug-03-scene.png' },
      { text: `Baby Bear climbed into bed.

"One more hug?" asked Baby Bear.

Mama and Papa Bear both hugged.
The biggest hug ever!
Squeeze, squeeze, squeeze!` },
      { text: `Baby Bear smiled.
So many hugs!
So much love!

"Goodnight," said Mama.
"Goodnight," said Papa.
"Goodnight," said Baby Bear.

No more hugs.
Just dreams.
Dreams full of hugs.

Goodnight.` }
    ],
  },
  {
    slug: 'rainbow-dreams',
    title: 'Rainbow Dreams',
    description: 'Close your eyes and dream of all the colors of the rainbow.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🌈',
    themes: ['Colors', 'Dreams', 'Imagination'],
    tags: ['rainbow', 'colors', 'dreams', 'imagination', 'sleep'],
    characters: ['Child'],
    keywords: ['rainbow dreams', 'toddler bedtime story'],
    coverImage: '/illustrations/rainbow-dreams/rainbow-dreams-01-cover.png',
    pages: [
      { text: `Close your eyes.
Take a deep breath.

Let's dream of colors.` },
      { text: `Dream of RED like apples.
Dream of ORANGE like pumpkins.
Dream of YELLOW like the sun.

So warm. So bright.`, illustration: '/illustrations/rainbow-dreams/rainbow-dreams-02-scene.png' },
      { text: `Dream of GREEN like grass.
Dream of BLUE like the sky.
Dream of PURPLE like grapes.

So calm. So soft.`, illustration: '/illustrations/rainbow-dreams/rainbow-dreams-03-scene.png' },
      { text: `All the colors together.
A rainbow!

The rainbow wraps around you.
Like a blanket.
Warm and soft.

You are safe.
You are loved.
You are dreaming.

Goodnight, little dreamer.` }
    ],
  },
  {
    slug: 'whisper-whisper',
    title: 'Whisper, Whisper',
    description: 'At bedtime, everything gets quiet... even the whispers.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🤫',
    themes: ['Quiet', 'Bedtime', 'Calm'],
    tags: ['quiet', 'whisper', 'calm', 'bedtime', 'peaceful'],
    characters: ['Child', 'Parent'],
    keywords: ['whisper whisper', 'toddler bedtime story'],
    coverImage: '/illustrations/whisper-whisper/whisper-whisper-01-cover.png',
    pages: [
      { text: `The day was loud.
So much noise!

But now?

Whisper, whisper.
Everything is quiet.` },
      { text: `The toys are quiet.
The books are quiet.
Even the clock goes tick... tick... tick...

So quiet.`, illustration: '/illustrations/whisper-whisper/whisper-whisper-02-scene.png' },
      { text: `Mama whispers, "I love you."
Papa whispers, "Sweet dreams."

Whisper, whisper.
So soft. So gentle.`, illustration: '/illustrations/whisper-whisper/whisper-whisper-03-scene.png' },
      { text: `You whisper too.
"Goodnight."

The room is quiet.
Your eyes are heavy.
Your body is soft.

No more whispers.
Just sleep.

Shhhhh.

Goodnight.` }
    ],
  },
  {
    slug: 'moon-and-me',
    title: 'Moon and Me',
    description: 'The moon watches over you while you sleep.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🌙',
    themes: ['Moon', 'Safety', 'Night'],
    tags: ['moon', 'night', 'watching', 'safe', 'sky'],
    characters: ['Child', 'Moon'],
    keywords: ['moon and me', 'toddler bedtime story'],
    coverImage: '/illustrations/moon-and-me/moon-and-me-01-cover.png',
    pages: [
      { text: `Look out the window.
Do you see the moon?

The moon sees you!`, illustration: '/illustrations/moon-and-me/moon-and-me-02-scene.png' },
      { text: `The moon is big and round.
The moon glows soft and white.
The moon smiles down at you.

"Hello, moon!"` },
      { text: `"I will watch you," says the moon.
"All night long.

When you sleep,
I will shine.

When you dream,
I will glow.

You are safe."` },
      { text: `The moon watches.
You sleep.

The moon glows.
You dream.

The moon and you.
Together.
All night long.

Goodnight, moon.
Goodnight, you.`, illustration: '/illustrations/moon-and-me/moon-and-me-03-scene.png' }
    ],
  },
  {
    slug: 'soft-things',
    title: 'Soft Things',
    description: 'Bedtime is full of soft, cozy things.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '🧸',
    themes: ['Comfort', 'Texture', 'Cozy'],
    tags: ['soft', 'cozy', 'blanket', 'pillow', 'comfort'],
    characters: ['Child'],
    keywords: ['soft things', 'toddler bedtime story'],
    coverImage: '/illustrations/soft-things/soft-things-01-cover.png',
    pages: [
      { text: `Bedtime is soft.

So many soft things!` },
      { text: `Soft blanket.
Wrap it around you.

Soft pillow.
Rest your head.

Soft teddy.
Hold him tight.`, illustration: '/illustrations/soft-things/soft-things-02-scene.png' },
      { text: `Soft pajamas.
So cozy!

Soft slippers.
So warm!

Soft bed.
Sink right in.`, illustration: '/illustrations/soft-things/soft-things-03-scene.png' },
      { text: `Everything is soft.
Everything is cozy.

You are warm.
You are safe.
You are sleepy.

Time to close your soft eyes.
Time for soft dreams.

Goodnight, soft one.` }
    ],
  },
  {
    slug: 'the-yawn-song',
    title: 'The Yawn Song',
    description: 'One yawn leads to another... and another... until everyone is sleepy!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '😴',
    themes: ['Yawning', 'Sleepy', 'Contagious'],
    tags: ['yawn', 'sleepy', 'tired', 'contagious', 'bedtime'],
    characters: ['Cat', 'Dog', 'Bird', 'Child'],
    keywords: ['the yawn song', 'toddler bedtime story'],
    coverImage: '/illustrations/the-yawn-song/the-yawn-song-01-cover.png',
    pages: [
      { text: `Cat yawned.
A big yawn.
YAWWWWN!

Dog saw the yawn.
Dog yawned too.
YAWWWWN!`, illustration: '/illustrations/the-yawn-song/the-yawn-song-02-scene.png' },
      { text: `Bird saw the yawns.
Bird yawned.
YAWWWN!

Mouse saw the yawn.
Mouse yawned.
Yawwwn!` },
      { text: `You saw all the yawns.

Are you yawning?

YAWWWWWWN!

Yes! You are!`, illustration: '/illustrations/the-yawn-song/the-yawn-song-03-scene.png' },
      { text: `Yawns are funny.
Yawns spread around.
Yawns mean sleepy time.

Cat is sleeping.
Dog is sleeping.
Bird is sleeping.
Mouse is sleeping.

You?

YAWWWN.

Goodnight, sleepyhead.` }
    ],
  },
  {
    slug: 'the-lighthouse-keepers-daughter',
    title: "The Lighthouse Keeper's Daughter",
    description: 'Maya helps her father keep the lighthouse shining bright.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🏠',
    themes: ['Responsibility', 'Family', 'Bravery'],
    tags: ['lighthouse', 'ocean', 'family', 'helping', 'brave', 'girl'],
    characters: ['Maya', 'Papa'],
    keywords: ['the lighthouse keepers daughter', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-lighthouse-keepers-daughter/the-lighthouse-keepers-daughter-01-cover.png',
    pages: [
      { text: `Maya lived in a lighthouse with her father.

Every night, her father climbed the winding stairs to light the great lamp. The light spun round and round, warning ships of the rocky shore.

"Can I help?" Maya always asked.

"When you're older," Papa always said.` },
      { text: `One stormy night, Papa fell sick. He could barely lift his head from the pillow.

"The light," he whispered. "Someone must light the lamp."

Maya looked at the winding stairs. They went up, up, up into the darkness.

She was scared. But the ships needed the light.`, illustration: '/illustrations/the-lighthouse-keepers-daughter/the-lighthouse-keepers-daughter-02-scene.png' },
      { text: `Maya climbed.

Step by step. Round and round. The wind howled outside. The rain beat against the windows.

Finally, she reached the top. The great lamp sat cold and dark.

Maya remembered watching her father. She turned the valve. She struck the match. She touched the flame to the wick.

WHOOSH!

The light blazed to life!`, illustration: '/illustrations/the-lighthouse-keepers-daughter/the-lighthouse-keepers-daughter-03-scene.png' },
      { text: `All night, Maya stayed with the light. She watched it spin. She watched it shine.

In the morning, Papa found her asleep beside the lamp.

"You did it," he said softly. "You kept the light burning."

From that night on, Maya helped light the lamp.

Not because she had to.
Because she was ready.

THE END` }
    ],
  },
  {
    slug: 'the-night-gardener',
    title: 'The Night Gardener',
    description: 'Old Mr. Moon tends his garden of dreams while everyone sleeps.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🌱',
    themes: ['Dreams', 'Growth', 'Magic'],
    tags: ['garden', 'moon', 'dreams', 'magic', 'growing', 'night'],
    characters: ['Mr. Moon', 'Dreams'],
    keywords: ['the night gardener', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-night-gardener/the-night-gardener-01-cover.png',
    pages: [
      { text: `Most people think the moon just hangs in the sky doing nothing.

But Old Mr. Moon has a very important job. He is a gardener.

Not a gardener of flowers or vegetables. Mr. Moon grows dreams.

His garden is made of clouds, and in it grow dreams of every kind.` },
      { text: `When children fall asleep, Mr. Moon walks through his garden with his silver watering can.

He waters the adventure dreams—they grow wild and tall.
He trims the silly dreams—they giggle when he clips them.
He feeds the cozy dreams—they purr like cats.

Each dream, when it's ready, floats down from the sky and lands softly in a sleeping child's mind.`, illustration: '/illustrations/the-night-gardener/the-night-gardener-02-scene.png' },
      { text: `One night, a little girl couldn't sleep. She looked out her window and saw something strange.

The moon was moving. No—the moon was WORKING. She could see tiny lights in a cloudy garden far above.

"What are you doing?" she whispered.

Mr. Moon looked down and smiled.

"Growing your dream," he said. "It's almost ready."`, illustration: '/illustrations/the-night-gardener/the-night-gardener-03-scene.png' },
      { text: `The girl watched as Mr. Moon plucked something glowing from his garden. He blew on it gently, and it floated down, down, down...

It landed on her pillow like a feather made of starlight.

The girl closed her eyes. And she dreamed the most wonderful dream—of flying through Mr. Moon's magical garden, helping him water the dreams that would visit children all around the world.

Some say she still helps him, every night, in her dreams.

THE END` }
    ],
  },
  {
    slug: 'the-wish-fish',
    title: 'The Wish Fish',
    description: 'A magical fish grants wishes—but the best wish might surprise you.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🐟',
    themes: ['Wishes', 'Gratitude', 'Contentment'],
    tags: ['fish', 'wishes', 'magic', 'ocean', 'grateful', 'lesson'],
    characters: ['Finn', 'Wish Fish'],
    keywords: ['the wish fish', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-wish-fish/the-wish-fish-01-cover.png',
    pages: [
      { text: `Finn loved to fish at the old wooden dock. One evening, he caught something amazing.

The fish was silver and gold, and it sparkled like a tiny sun.

"Please let me go," said the fish, "and I will grant you three wishes."

Finn's eyes went wide. THREE WISHES!`, illustration: '/illustrations/the-wish-fish/the-wish-fish-02-scene.png' },
      { text: `"I wish for a mountain of toys!" said Finn.

POOF! Toys appeared everywhere. So many toys he couldn't see his room anymore.

At first it was fun. Then it was crowded. Then it was lonely. You can't hug a toy mountain.

"I wish the toys were gone," Finn said quietly.

POOF! They vanished. He had one wish left.` },
      { text: `Finn thought for a long time. What did he really, truly want?

He walked to the dock. He sat and watched the sunset paint the water orange and pink. His dog came and sat beside him. His father brought him a sandwich.

"This is nice," Finn thought. "This is really nice."`, illustration: '/illustrations/the-wish-fish/the-wish-fish-03-scene.png' },
      { text: `The Wish Fish appeared in the water.

"Ready for your last wish?"

Finn smiled. "I wish... for more days like this. Quiet ones. With my dog and my dad and sandwiches and sunsets."

The fish's eyes sparkled. "That is the wisest wish of all. You don't need magic for that wish, Finn. You just need to notice what you already have."

The fish swam away.

And Finn? He had exactly what he wished for, every single day.

THE END` }
    ],
  },
  {
    slug: 'the-blanket-fort-kingdom',
    title: 'The Blanket Fort Kingdom',
    description: 'Every blanket fort holds a secret world—if you know how to look.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🏰',
    themes: ['Imagination', 'Adventure', 'Creativity'],
    tags: ['blanket fort', 'imagination', 'adventure', 'play', 'creative'],
    characters: ['Leo', 'Queen Cushion'],
    keywords: ['the blanket fort kingdom', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-blanket-fort-kingdom/the-blanket-fort-kingdom-01-cover.png',
    pages: [
      { text: `Leo built the best blanket fort ever.

Four chairs. Two blankets. Six pillows. One flashlight.

He crawled inside and clicked on the flashlight.

That's when something magical happened.

The blankets began to glow. The pillows began to move. And a tiny voice said, "Welcome to the Kingdom of Soft."`, illustration: '/illustrations/the-blanket-fort-kingdom/the-blanket-fort-kingdom-02-scene.png' },
      { text: `A pillow with button eyes bowed before him.

"I am Queen Cushion," she said. "We have waited long for a brave builder like you."

Leo looked around. His blanket fort had become a castle! The flashlight was now a glowing torch. The floor was made of clouds.

"Our kingdom is in trouble," said the Queen. "The Dust Bunnies have stolen our coziness. Everything is cold and scratchy. Will you help us?"` },
      { text: `Leo was scared. But he was also brave.

"I'll help," he said.

The Queen gave him a sword made of a cardboard tube and armor made of soft fleece.

Leo found the Dust Bunnies hiding under the far corner of the fort. They were gray and grumpy.

"Why did you steal the coziness?" Leo asked.

"Because no one ever invites us in," said the biggest Dust Bunny. "We're always swept away."`, illustration: '/illustrations/the-blanket-fort-kingdom/the-blanket-fort-kingdom-03-scene.png' },
      { text: `Leo had an idea. "What if you helped MAKE things cozy instead of taking coziness away?"

The Dust Bunnies looked at each other. No one had ever asked them to help before.

They agreed to try. And from then on, Dust Bunnies helped fluff pillows and soften blankets throughout the Kingdom of Soft.

Leo crawled out of his fort, yawning.

It was just a blanket fort again. Or was it?

He could have sworn the pillows winked at him as he fell asleep.

THE END` }
    ],
  },
  {
    slug: 'the-star-collector',
    title: 'The Star Collector',
    description: 'A lonely boy discovers that the best treasures can\'t be kept.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '⭐',
    themes: ['Sharing', 'Loneliness', 'Connection'],
    tags: ['stars', 'collecting', 'sharing', 'friendship', 'night sky'],
    characters: ['Thomas', 'Stars'],
    keywords: ['the star collector', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-star-collector/the-star-collector-01-cover.png',
    pages: [
      { text: `Thomas collected things. Rocks. Shells. Bottle caps. Feathers.

But his favorite collection was secret.

Every night, Thomas climbed to his roof with a special jar. And every night, he caught one star.

He had jars and jars of them hidden under his bed. They glowed softly in the dark.`, illustration: '/illustrations/the-star-collector/the-star-collector-02-scene.png' },
      { text: `But lately, something was wrong.

The night sky looked emptier. Where there used to be thousands of stars, now there were only hundreds.

And Thomas felt strange. The more stars he collected, the lonelier he felt.

One night, a star spoke to him before he could catch it.

"Please," said the star. "Let us go. Stars aren't meant to be kept. We're meant to be shared."` },
      { text: `Thomas looked at the dark patches in the sky where stars used to be. He thought about all the other children who couldn't see them anymore.

He thought about his jars of glowing stars, all alone under his bed.

"I'm sorry," Thomas whispered.

He opened every jar.`, illustration: '/illustrations/the-star-collector/the-star-collector-03-scene.png' },
      { text: `The stars flew up, up, up into the sky. They swirled around Thomas like fireflies, and he could have sworn they were saying thank you.

The sky blazed with light again. Brighter than ever.

Thomas smiled. His jars were empty. But for the first time in a long time, he didn't feel alone.

Because now, whenever he looked up, the stars winked at him like old friends.

THE END` }
    ],
  },
  {
    slug: 'the-monster-under-my-bed-is-scared',
    title: 'The Monster Under My Bed Is Scared',
    description: 'What if the monster under your bed was more afraid of YOU?',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '👹',
    themes: ['Fear', 'Friendship', 'Perspective'],
    tags: ['monster', 'fear', 'friendship', 'bedtime', 'brave', 'funny'],
    characters: ['Emma', 'Gorp'],
    keywords: ['the monster under my bed is scared', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-monster-under-my-bed-is-scared/the-monster-under-my-bed-is-scared-01-cover.png',
    pages: [
      { text: `Emma heard a noise under her bed.

SCRATCH, SCRATCH, SCRATCH.

Most kids would hide under the covers. But Emma was curious. She hung upside down over the edge of her bed and looked underneath.

Two huge yellow eyes stared back at her.

"AAAAH!" screamed the eyes.

"AAAAH!" screamed Emma.

They both scrambled away from each other.`, illustration: '/illustrations/the-monster-under-my-bed-is-scared/the-monster-under-my-bed-is-scared-02-scene.png' },
      { text: `"Wait," said Emma. "Did YOU just scream?"

"You scared me!" said a tiny, trembling voice. A fuzzy purple monster crept out from under the bed. He was shaking.

"I'm Gorp," he said. "I'm supposed to be scary. But honestly? I'm terrified of everything. Especially humans."

Emma had never thought about it that way.` },
      { text: `"What scares you?" Emma asked.

"Everything!" said Gorp. "The closet is dark. The window is too bright. The ceiling fan sounds like a helicopter. And you humans are HUGE."

Emma thought about her own fears. The dark. Strange noises. Being alone.

"I get scared too," she said softly.`, illustration: '/illustrations/the-monster-under-my-bed-is-scared/the-monster-under-my-bed-is-scared-03-scene.png' },
      { text: `From that night on, Emma and Gorp were friends.

When Emma felt scared, Gorp would hold her hand with his fuzzy paw.
When Gorp felt scared, Emma would tell him jokes until he laughed.

They figured out that fear is much smaller when you share it with someone.

And under Emma's bed? It wasn't scary anymore. It was just where her friend Gorp lived.

THE END` }
    ],
  },
  {
    slug: 'the-dream-library',
    title: 'The Dream Library',
    description: 'Every night, a magical library opens where you can borrow dreams.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '📚',
    themes: ['Books', 'Dreams', 'Choice'],
    tags: ['library', 'dreams', 'books', 'reading', 'magic', 'choice'],
    characters: ['Aria', 'Dream Librarian'],
    keywords: ['the dream library', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-dream-library/the-dream-library-01-cover.png',
    pages: [
      { text: `Every night, when Aria fell asleep, she found herself in the same place.

A library.

But not an ordinary library. This one had shelves that reached into the clouds. The books glowed in different colors. And floating candles lit the way.

"Welcome back," said the Dream Librarian. She had silver hair and kind eyes. "What kind of dream would you like tonight?"` },
      { text: `Aria walked through the aisles.

Adventure dreams were red and warm to touch.
Funny dreams were yellow and kept giggling on the shelf.
Flying dreams were blue and floated slightly off their spots.
Peaceful dreams were green and hummed softly.

"How do I choose?" Aria asked.

"Listen," said the Librarian. "One book will feel right."`, illustration: '/illustrations/the-dream-library/the-dream-library-02-scene.png' },
      { text: `Aria closed her eyes and walked slowly. She felt warmth near the adventure section. She heard giggles from the funny dreams. But then she felt something else.

A small, quiet glow. A book that seemed to be waiting just for her.

It was purple and silver, and when she touched it, she felt safe.

The title said: "Dreams of Home."`, illustration: '/illustrations/the-dream-library/the-dream-library-03-scene.png' },
      { text: `That night, Aria dreamed of her grandmother's kitchen. The smell of cookies. The sound of laughter. Warm hugs that lasted forever.

When she woke up, she was smiling.

Every night after, Aria visited the Dream Library. Sometimes she chose adventure. Sometimes she chose flying.

But whenever she missed someone, she knew exactly which book to find.

THE END` }
    ],
  },
  {
    slug: 'the-night-bus',
    title: 'The Night Bus',
    description: 'A special bus picks up sleepy children and takes them to dreamland.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🚌',
    themes: ['Journey', 'Sleep', 'Wonder'],
    tags: ['bus', 'journey', 'sleep', 'travel', 'night', 'adventure'],
    characters: ['Sam', 'Bus Driver'],
    keywords: ['the night bus', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-night-bus/the-night-bus-01-cover.png',
    pages: [
      { text: `Every night at exactly midnight, a bus drives down Sam's street.

It's not on any map. It doesn't have a number. It just appears when the clock strikes twelve.

The bus is silver and glows faintly in the moonlight. The driver tips his hat to anyone still awake.

Most people don't see it. But Sam does.

One night, Sam decided to get on.` },
      { text: `The bus was warm and soft inside. The seats were like clouds. Other children sat quietly, some already dozing.

"Where does this bus go?" Sam asked the driver.

"To Dreamland," said the driver. "But only if you're tired enough. Are you tired, young traveler?"

Sam yawned. He was VERY tired.`, illustration: '/illustrations/the-night-bus/the-night-bus-02-scene.png' },
      { text: `The bus drove through the night. Out the windows, Sam saw amazing things.

A forest made of pillows.
A river made of warm milk.
Mountains made of stuffed animals.

Each child got off at a different stop—their own perfect dream.

"What will my dream be?" Sam wondered.`, illustration: '/illustrations/the-night-bus/the-night-bus-03-scene.png' },
      { text: `"Last stop," called the driver.

Sam looked out the window. He saw his own house. His own room. His own bed, glowing warmly.

"But I wanted to go somewhere magical!" said Sam.

"You already are," said the driver. "The most magical place is the place where you feel safe and loved."

Sam climbed into bed. And he dreamed of flying, and laughing, and everything wonderful.

All without leaving home.

THE END` }
    ],
  },
  {
    slug: 'the-shadow-friend',
    title: 'The Shadow Friend',
    description: 'Your shadow is always with you—even in the dark.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🌓',
    themes: ['Shadow', 'Friendship', 'Never Alone'],
    tags: ['shadow', 'friendship', 'dark', 'alone', 'comfort'],
    characters: ['Mia', 'Shadow'],
    keywords: ['the shadow friend', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-shadow-friend/the-shadow-friend-01-cover.png',
    pages: [
      { text: `Mia didn't like the dark.

When the lights went out, she felt alone. So alone.

But one night, she noticed something. Her shadow, cast by the nightlight, seemed to wave at her.

"Did you just move?" Mia whispered.

The shadow nodded.` },
      { text: `"I'm always here," said the shadow. Its voice was soft, like silk.

"Even in the dark?" asked Mia.

"Especially in the dark," said the shadow. "That's when you need me most. I'm the part of you that's brave when you don't feel brave. I'm the part that stays when everything else seems scary."

Mia had never thought about her shadow that way.`, illustration: '/illustrations/the-shadow-friend/the-shadow-friend-02-scene.png' },
      { text: `"Can you protect me from monsters?" Mia asked.

The shadow smiled. "There are no monsters. But if there were? I would grow very, very big." The shadow stretched across the whole wall, tall and strong.

Mia laughed. It felt good to laugh in the dark.`, illustration: '/illustrations/the-shadow-friend/the-shadow-friend-03-scene.png' },
      { text: `From then on, Mia wasn't afraid of the dark.

She knew her shadow was there, stretched out beside her or tucked small beneath her pillow.

Some nights she would whisper, "Goodnight, shadow."

And her shadow would wave.

You are never really alone. Even your shadow loves you.

THE END` }
    ],
  },
  {
    slug: 'the-sleep-train-engineer',
    title: 'The Sleep Train Engineer',
    description: 'Every night, someone drives the train that carries us to sleep.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🚂',
    themes: ['Sleep', 'Journey', 'Routine'],
    tags: ['train', 'sleep', 'engineer', 'journey', 'bedtime'],
    characters: ['Engineer', 'You'],
    keywords: ['the sleep train engineer', 'earlyReader bedtime story'],
    coverImage: '/illustrations/the-sleep-train-engineer/the-sleep-train-engineer-01-cover.png',
    pages: [
      { text: `Have you ever wondered how sleep finds you?

It takes a train.

The Sleep Train runs every single night, and someone has to drive it. That someone is the Sleep Train Engineer.

She wears striped pajamas and a conductor's hat. Her name is Ms. Lullaby.` },
      { text: `Every evening, Ms. Lullaby checks her route.

First stop: Close Your Eyes Station.
Second stop: Take Deep Breaths Junction.
Third stop: Think Happy Thoughts Crossing.
Final destination: Dreamland.

She blows the whistle. TOOT TOOT!
The train begins to move.`, illustration: '/illustrations/the-sleep-train-engineer/the-sleep-train-engineer-02-scene.png' },
      { text: `The train cars are filled with soft things.

One car has warm blankets.
One car has favorite stuffed animals.
One car has quiet music.
One car has the smell of cookies.

Everything you need to feel safe and sleepy rides along with you.`, illustration: '/illustrations/the-sleep-train-engineer/the-sleep-train-engineer-03-scene.png' },
      { text: `The train chugs along, slower and slower.

Your eyes feel heavy.
Your breathing gets slow.
Your thoughts get fuzzy and warm.

"All aboard for Dreamland," Ms. Lullaby whispers.

And before you know it, you're there.

Sweet dreams, passenger. Same train, same time, tomorrow night.

THE END` }
    ],
  },
  {
    slug: 'moonlit-garden-dreams',
    title: 'Moonlit Garden Dreams',
    description: 'In a quiet garden under the moonlight, all the flowers yawn. A little bunny named Benny hops around, feeling cozy.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🌈',
    themes: ['Bedtime', 'Nature', 'Dreams'],
    tags: ['bedtime', 'nature', 'garden', 'bunny', 'dreams'],
    characters: ['Benny'],
    keywords: ['moonlit garden dreams', 'early-readers bedtime story'],
    coverImage: '/illustrations/moonlit-garden-dreams/moonlit-garden-dreams-cover.png',
    pages: [
      { text: `In a quiet garden, under the silver moonlight, all the flowers begin to yawn. The daisies stretch their petals wide, while the tulips gently nod their heads. The soft breeze whispers through the leaves, singing a lullaby just for them.`, illustration: '/illustrations/moonlit-garden-dreams/moonlit-garden-dreams-cover.png' },
      { text: `A little bunny named Benny hops through the garden, his fur soft and warm. He sniffs the sweet scent of night-blooming jasmine. "Oh, how cozy this feels!" he sighs. Benny finds a comfy spot on a bed of moss, feeling the gentle earth beneath him. ` },
      { text: `Above, the stars twinkle like tiny diamonds in the sky. Benny looks up, his big eyes sparkling with wonder. The moon smiles down, casting a gentle glow over the sleepy flowers. "Goodnight, lovely garden," he whispers, feeling the warm glow of sleep wrapping around him like a soft blanket.` },
      { text: `As the night deepens, the garden hums a peaceful tune. The crickets chirp softly, and the owls hoot a gentle song. Benny closes his eyes, imagining the dreams waiting for him—a world of soft clouds and whispering winds. `, illustration: '/illustrations/moonlit-garden-dreams/moonlit-garden-dreams-scene.png' },
      { text: `The flowers lean in closer, creating a cozy circle around Benny. They, too, begin to drift off into their dreams, filled with giggles and the sweet scent of dew-kissed morning. In this magical garden, everything is quiet and calm, ready to embrace a night full of gentle dreams. Benny takes one last deep breath, feeling safe and snug. With a soft sigh, he sinks into a peaceful slumber, surrounded by the warmth of the moonlight and the soft whispers of nature. ` },
      { text: `And so, the garden sleeps, wrapped in a blanket of stars, as Benny dreams under the shining moon. Sweet dreams, little bunny. Sweet dreams, lovely garden.`, illustration: '/illustrations/moonlit-garden-dreams/moonlit-garden-dreams-ending.png' },
    ],
  },
  {
    slug: 'marshmallow-princess-chocolate-prince',
    title: 'Marshmallow Princess and Chocolate Prince',
    description: "In the sweet kingdom of S'morland, Princess Fluffina and Prince Choco find love and friendship with the help of their graham cracker friends.",
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🍫',
    themes: ['Friendship', 'Love', 'Sharing'],
    tags: ['princess', 'chocolate', 'marshmallow', 'friendship', 'bedtime story'],
    characters: ['Fluffina', 'Choco', 'Graham'],
    keywords: ['marshmallow princess chocolate prince', 'early-readers bedtime story'],
    coverImage: '/illustrations/marshmallow-princess-chocolate-prince/marshmallow-princess-chocolate-prince-cover.png',
    ideaCredit: 'Madelaine',
    pages: [
      { text: `Once upon a time, in a sweet little kingdom called S'morland, there lived a lovely princess made of marshmallows. Her name was Princess Fluffina. She was soft and squishy, always giggling like bubbles in warm cocoa. One day, she met a dashing prince made of rich, dark chocolate named Prince Choco. He was smooth and warm, and they instantly fell in love!`, illustration: '/illustrations/marshmallow-princess-chocolate-prince/marshmallow-princess-chocolate-prince-cover.png' },
      { text: `Every day, Fluffina and Choco played in the sunny meadows, surrounded by candy flowers and twinkling stars. They laughed and danced, creating magical moments. But as time passed, they began to squabble about the little things. Fluffina wanted to play on the soft marshmallow clouds, while Choco preferred the bubbling chocolate springs.` },
      { text: `Their best friends, the Grahams, made of crunchy graham crackers, noticed their squabbles and knew they had to help. "Don't worry!" said Graham, the leader of the gang. "We'll help you find a way!" So, the Grahams brought Fluffina and Choco together for a cozy gathering.`, illustration: '/illustrations/marshmallow-princess-chocolate-prince/marshmallow-princess-chocolate-prince-scene.png' },
      { text: `They shared gooey s'mores and told funny stories. As they munched and laughed, Fluffina and Choco realized how much they loved each other and how much fun it was to share. From that day on, they learned to combine their favorite games.` },
      { text: `They built fluffy marshmallow castles near the chocolate springs, and together they danced under the sweet moonlight. With the help of their friends, they found harmony, love, and laughter. As the stars twinkled overhead, Fluffina and Choco snuggled close, feeling warm and cozy.` },
      { text: `The Grahams wrapped around them like a blanket, and they all drifted off to sleep, dreaming sweet dreams of adventures yet to come. In S'morland, everyone lived happily ever s'mores! And so, under the gentle glow of the moon, Princess Fluffina and Prince Choco slipped into a peaceful sleep, ready for the wonderful dreams that awaited them.`, illustration: '/illustrations/marshmallow-princess-chocolate-prince/marshmallow-princess-chocolate-prince-ending.png' },
    ],
  },
  {
    slug: 'the-sharing-castle',
    title: 'The Sharing Castle',
    description: 'In the cozy Sharing Castle, a little mouse named Milo learns that sharing brings more joy than keeping things for yourself.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🏰',
    themes: ['Sharing', 'Friendship', 'Kindness'],
    tags: ['sharing', 'friendship', 'kindness', 'imagination', 'bedtime'],
    characters: ['Milo', 'Bella', 'Sammy', 'Lucy'],
    keywords: ['the sharing castle', 'early-readers bedtime story'],
    coverImage: '/illustrations/the-sharing-castle/the-sharing-castle-cover.png',
    pages: [
      { text: `Once upon a time in a cozy little kingdom, there stood a beautiful castle made of fluffy clouds. This was the Sharing Castle, where everyone was welcome. Inside, the rooms were filled with soft, warm pillows and sparkling fairy lights that twinkled like stars.`, illustration: '/illustrations/the-sharing-castle/the-sharing-castle-cover.png' },
      { text: `One sunny day, a tiny mouse named Milo wanted to play with his friends, but he had only one shiny red ball. He felt sad because he didn't want to share it. "What if they take my ball and don't give it back?" he thought, hugging it tightly.` },
      { text: `Just then, his friend Bella the bunny hopped by. "Hi, Milo! Want to play?" she asked, her eyes shining with excitement. Milo looked at Bella and thought about how much fun they could have playing together. With a deep breath, he finally said, "Okay, Bella! Let's play!"`, illustration: '/illustrations/the-sharing-castle/the-sharing-castle-scene.png' },
      { text: `As they rolled the ball back and forth, Milo felt something warm in his heart. He noticed that Bella was giggling and having a great time. Soon, Sammy the squirrel joined them, and then Lucy the little bird flew in too. They all laughed and played with the red ball, creating happy memories in the warm sun.` },
      { text: `Milo realized that sharing his ball brought everyone joy, and he felt proud for being brave enough to let it go. As the sun began to set, painting the sky in soft pinks and oranges, Milo and his friends sat down on a fluffy cloud and watched the stars appear one by one.` },
      { text: `Feeling cozy and tired, Milo yawned. He snuggled up on his pillow, surrounded by his friends, as they all whispered goodnight. "Thank you for sharing, Milo!" Bella said softly. Milo smiled with sleepy eyes, feeling warm and happy as he drifted off to sleep, dreaming of more adventures in the Sharing Castle.`, illustration: '/illustrations/the-sharing-castle/the-sharing-castle-ending.png' },
    ],
  },
  {
    slug: 'whispers-of-the-night',
    title: 'Whispers of the Night',
    description: 'In a gentle forest, all the creatures settle down for a peaceful sleep under the twinkling stars.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🌙',
    themes: ['Nature', 'Bedtime', 'Dreams'],
    tags: ['nature', 'bedtime', 'forest', 'dreams', 'nighttime'],
    characters: ['Bunny', 'Fox', 'Owl'],
    keywords: ['whispers of the night', 'early-readers bedtime story'],
    coverImage: '/illustrations/whispers-of-the-night/whispers-of-the-night-cover.png',
    pages: [
      { text: `In a gentle forest where tall trees sway, the night comes softly, guiding all to play. The moon glows bright, casting silver beams, while sleepy animals drift into their dreams.`, illustration: '/illustrations/whispers-of-the-night/whispers-of-the-night-cover.png' },
      { text: `Bunny hops home, to his cozy burrow, where the soft moss is warm like a fuzzy pillow. The stars twinkle above, like diamonds on black, as the whispering winds sing a soft lullaby back.` },
      { text: `In the cool grass, little fox snuggles tight, closing his eyes with the softest delight. The crickets are chirping their sweet little song, while the owl in the oak tree hoots all night long.`, illustration: '/illustrations/whispers-of-the-night/whispers-of-the-night-scene.png' },
      { text: `Down by the river, the fish swim slow, under the moonlight's gentle, shimmering glow. The water is calm, sparkling with light, as the frogs croak softly, saying, "Goodnight, goodnight!"` },
      { text: `In the garden, flowers sway with grace, their petals closed tight, a sweet sleepy face. Ladybugs cuddle on leaves, so small, while the night air whispers a hush over all.` },
      { text: `And high in the sky, the clouds drift by, like soft, fluffy pillows where the dreamers lie. The forest is quiet, a magical place, where every creature finds their resting space. As the night deepens, all creatures prepare. They close their eyes without a single care. With a yawn and a stretch, they settle in tight, under the blanket of stars, in the warm, cozy night.`, illustration: '/illustrations/whispers-of-the-night/whispers-of-the-night-ending.png' },
    ],
  },
  {
    slug: 'walnuts-the-sneaky-raccoon',
    title: 'Walnuts the Sneaky Raccoon',
    description: 'A cheeky raccoon steals Finley\'s rainbow shoe in this playful bedtime adventure!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '3 min',
    readingMinutes: 3,
    emoji: '🦝',
    themes: ['Adventure', 'Humor', 'Bedtime'],
    tags: ['raccoon', 'rainbow', 'imagination', 'funny', 'animals'],
    characters: ['Finley', 'Walnuts'],
    keywords: ['raccoon bedtime story', 'funny bedtime story', 'toddler sleep story'],
    coverImage: '/illustrations/walnuts-the-sneaky-raccoon/walnuts-the-sneaky-raccoon-cover.png',
    ideaCredit: 'Finley',
    pages: [
      { text: `One sunny afternoon, Finley played outside with her bright, rainbow-colored shoe. The colors sparkled in the sunlight, and Finley giggled as she squished playdoh between her fingers.`, illustration: '/illustrations/walnuts-the-sneaky-raccoon/walnuts-the-sneaky-raccoon-cover.png' },
      { text: `But later, when the sun began to set, she realized her shoe was left outside, covered in colorful playdoh. "Oh no!" she exclaimed.` },
      { text: `Just then, a curious raccoon named Walnuts appeared. He had big, sparkling eyes and a fluffy tail. With a quick little scamper, he snatched up Finley's shoe and ran away!`, illustration: '/illustrations/walnuts-the-sneaky-raccoon/walnuts-the-sneaky-raccoon-scene.png' },
      { text: `Finley tried everything to get her shoe back: crunchy snacks, a cozy blanket, even a big sign that said "I want my shoe back!" But clever Walnuts just danced away with his colorful treasure.` },
      { text: `As twilight painted the sky with stars, Finley sat down on the grass, feeling tired but not sad. She laughed about the funny raccoon prancing around town with her rainbow shoe.` },
      { text: `Finally, she lay back on the soft grass, letting the cool evening breeze wrap around her like a warm hug. "Goodnight, Walnuts," Finley whispered with a sleepy smile, as gentle dreams of rainbows and raccoons filled her mind.`, illustration: '/illustrations/walnuts-the-sneaky-raccoon/walnuts-the-sneaky-raccoon-ending.png' },
    ],
  },
  {
    slug: 'counting-soft-clouds',
    title: 'Counting Soft Clouds',
    description: 'Benny the bear counts fluffy clouds until he drifts off to dreamland.',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '2 min',
    readingMinutes: 2,
    emoji: '☁️',
    themes: ['Counting', 'Relaxation', 'Bedtime'],
    tags: ['counting', 'clouds', 'bears', 'cozy', 'calming'],
    characters: ['Benny', 'Fluffy'],
    keywords: ['counting bedtime story', 'calming sleep story', 'bear bedtime story'],
    coverImage: '/illustrations/counting-soft-clouds/counting-soft-clouds-cover.png',
    pages: [
      { text: `In a cozy little room, a sleepy bear named Benny sat by the window. The sky was painted with soft shades of pink and purple as the sun began to set.`, illustration: '/illustrations/counting-soft-clouds/counting-soft-clouds-cover.png' },
      { text: `"Let's count the clouds together!" Benny whispered to his stuffed bunny, Fluffy. "One, two, three..." he counted as the clouds drifted lazily overhead.` },
      { text: `"Four, five, six..." Each cloud was soft and fluffy, just like his favorite blanket. "Seven, eight... oh! Look at that big one! It looks like a marshmallow!"`, illustration: '/illustrations/counting-soft-clouds/counting-soft-clouds-scene.png' },
      { text: `"Nine, ten..." His eyes grew heavier with each number. He snuggled deeper into his blanket, feeling cozy and warm.` },
      { text: `"Goodnight, Fluffy, goodnight, soft clouds, goodnight, cozy room." Soon, his breathing slowed, and Benny drifted off to sleep, dreaming of counting clouds in a soft, starry sky.`, illustration: '/illustrations/counting-soft-clouds/counting-soft-clouds-ending.png' },
    ],
  },
  {
    slug: 'dreamy-cloud-adventure',
    title: 'Dreamy Cloud Adventure',
    description: 'Pippin the panda builds a pillow fort spaceship and flies to the clouds!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '3 min',
    readingMinutes: 3,
    emoji: '🐼',
    themes: ['Imagination', 'Adventure', 'Bedtime'],
    tags: ['panda', 'clouds', 'imagination', 'dreams', 'cozy'],
    characters: ['Pippin'],
    keywords: ['panda bedtime story', 'imagination story', 'dreamy bedtime story'],
    coverImage: '/illustrations/dreamy-cloud-adventure/dreamy-cloud-adventure-cover.png',
    pages: [
      { text: `In a cozy little house, there lived a soft panda named Pippin. Every night, Pippin loved to snuggle into his warm, fluffy blanket and dream of flying high in the sky.`, illustration: '/illustrations/dreamy-cloud-adventure/dreamy-cloud-adventure-cover.png' },
      { text: `One evening, Pippin built a cozy pillow fort with fluffy pillows and a warm quilt. He imagined it was a magical spaceship. "Let's go to the clouds!" he whispered.` },
      { text: `As soon as he closed his eyes, Pippin felt his fort lift off the ground. Up, up, up he went, until he reached the most wonderful clouds. They sparkled in the moonlight!`, illustration: '/illustrations/dreamy-cloud-adventure/dreamy-cloud-adventure-scene.png' },
      { text: `Pippin surfed on the clouds, sliding down like a gentle wave. He made fluffy cloud animals—a bunny and a starfish—who danced around him in delight.` },
      { text: `Then, Pippin found a cozy cloud couch, perfect for resting. He lay back and listened to the gentle sounds of the night, like a lullaby sung by the stars.` },
      { text: `"Goodnight, fluffy clouds. Goodnight, dream friends!" As the moonlight wrapped around him like a blanket, Pippin drifted off to sleep, ready for more adventures tomorrow.`, illustration: '/illustrations/dreamy-cloud-adventure/dreamy-cloud-adventure-ending.png' },
    ],
  },
  {
    slug: 'turtles-moonlit-journey',
    title: "Turtle's Moonlit Journey",
    description: 'Tilly the turtle follows the moonlight to a magical pond where she catches a star!',
    ageGroup: 'toddlers',
    ageLabel: 'Ages 2-4',
    ageRange: [2, 4],
    readingTime: '3 min',
    readingMinutes: 3,
    emoji: '🐢',
    themes: ['Adventure', 'Magic', 'Bedtime'],
    tags: ['turtle', 'moon', 'adventure', 'stars', 'magical'],
    characters: ['Tilly'],
    keywords: ['turtle bedtime story', 'moonlight story', 'magical bedtime story'],
    coverImage: '/illustrations/turtles-moonlit-journey/turtles-moonlit-journey-cover.png',
    pages: [
      { text: `In a gentle, green meadow, there lived a little turtle named Tilly. One magical night, as the silver moon hung low in the sky, Tilly gazed up at the twinkling stars.`, illustration: '/illustrations/turtles-moonlit-journey/turtles-moonlit-journey-cover.png' },
      { text: `She felt a warm breeze whispering secrets of adventure. With a cozy blanket of soft grass beneath her, Tilly decided to follow the glowing light of the moon.` },
      { text: `Soon, she arrived at a sparkling pond. The water shimmered like a thousand stars. "Hello, little turtle!" said the pond. "Would you like to catch a star?"`, illustration: '/illustrations/turtles-moonlit-journey/turtles-moonlit-journey-scene.png' },
      { text: `"Oh, yes, please!" Tilly replied. The pond rippled, and a tiny star floated up, shimmering and glowing. Tilly caught it, feeling its warm, gentle light against her shell.` },
      { text: `"Thank you, kind pond!" The star twinkled as if saying, "Goodnight, dear friend!" Tilly placed it back in the water, watching it float away to join its family in the sky.` },
      { text: `Feeling sleepy, Tilly returned to her cozy meadow. She nestled into her warm spot and whispered to the moon, "Thank you for the wonderful night." With a happy sigh, Tilly drifted off to peaceful dreams.`, illustration: '/illustrations/turtles-moonlit-journey/turtles-moonlit-journey-ending.png' },
    ],
  },
    {
    slug: 'ollie-the-brave-owl',
    title: 'Ollie the Brave Owl',
    description: 'Once upon a time, there was a little owl named Ollie who was scared of the dark. Every night, he hid in his nest, clutching his soft blanket.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🦉',
    themes: ['Bedtime', 'Friendship', 'Magic'],
    tags: ['owl', 'bedtime', 'courage', 'friendship', 'magic'],
    characters: ['Ollie', 'Maybe'],
    keywords: ['ollie the brave owl', 'early-readers bedtime story'],
    coverImage: '/illustrations/ollie-the-brave-owl/ollie-the-brave-owl-cover.png',
    ideaCredit: 'Gregory',
    pages: [
      { text: `Once upon a time, in a cozy little forest, there lived a small owl named Ollie. Ollie was the fluffiest, cutest little owl you could ever meet. He had soft, warm feathers that glimmered like stars in the twilight. But Ollie had a big secret: he was afraid of the dark.`, illustration: '/illustrations/ollie-the-brave-owl/ollie-the-brave-owl-cover.png' },
      { text: `Every night, when the sun dipped below the horizon, Ollie would hide in his cozy nest, clutching his tiny blanket. "What if the dark is scary?" he would think. But one night, a gentle breeze whispered through the trees, reminding him that magic awaited outside.` },
      { text: `Gathering his courage, Ollie peeked out from his nest. The moon shone brightly, lighting up the world with a silver glow. To his surprise, he saw fireflies dancing in the air, twinkling like tiny stars. He noticed the soft rustle of leaves and the gentle croak of frogs echoing the nighttime song.` },
      { text: `Ollie took a deep breath and fluffed up his feathers. "Maybe the night isn’t so scary after all," he thought. He ventured out, his heart beating like a little drum. As he flew through the trees, he spotted Gregory, a friendly young fox. Gregory smiled and waved his fluffy tail. "Come play, Ollie! The night is magical!"`, illustration: '/illustrations/ollie-the-brave-owl/ollie-the-brave-owl-scene.png' },
      { text: `Together, they glided through the forest. They found a shimmering pond that sparkled under the moonlight. Ollie dipped his tiny claws in the cool water, and it felt soft and refreshing. They laughed and played until they were both tired.` },
      { text: `As the stars twinkled above, Ollie felt a warm glow of happiness inside. He realized the night was filled with wonders—soft sounds, glowing lights, and gentle friends. With a sleepy yawn, Ollie returned to his nest, feeling cozy and brave.` },
      { text: `Snuggling into his blanket, he closed his eyes, knowing that the dark was just a magical part of his world. And as he drifted off to sleep, he dreamed of fireflies, moonlit ponds, and adventures yet to come.`, illustration: '/illustrations/ollie-the-brave-owl/ollie-the-brave-owl-ending.png' },
    ],
  },
    {
    slug: 'counting-stars',
    title: 'Counting Stars',
    description: 'In a cozy bedroom, Benny the bunny loved to count stars before bed. As the sun set and the sky turned blue, he looked out the window and began, "One, two, three.',
    ageGroup: 'early-readers',
    ageLabel: 'Ages 5-7',
    ageRange: [5, 7],
    readingTime: '5 min',
    readingMinutes: 5,
    emoji: '🌈',
    themes: ['Bedtime', 'Bedtime Routine'],
    tags: ['counting', 'bedtime', 'bunny', 'stars', 'routine'],
    characters: ['Benny'],
    keywords: ['counting stars', 'early-readers bedtime story'],
    coverImage: '/illustrations/counting-stars/counting-stars-cover.png',
    pages: [
      { text: `Once upon a time, in a cozy little bedroom, there lived a sweet bunny named Benny. As the sun began to set, Benny knew it was time to get ready for bed. He hopped out of his warm, fluffy bed and looked out the window. The sky was turning a soft, sleepy blue. Benny loved counting the stars. "One, two, three..." he whispered softly as he spotted the first star twinkling in the night sky.`, illustration: '/illustrations/counting-stars/counting-stars-cover.png' },
      { text: `As he counted, Benny felt warm and cozy. Each star made him feel a little more sleepy. "Four, five, six," he continued, his eyes getting heavier with each number. He could smell the soft lavender from his bedtime pillow, and it made him feel safe and calm.` },
      { text: `Benny decided to have a little fun while counting. He imagined the stars were little friends, each one glowing just for him. "Seven, eight, nine! Look at how bright you shine!" he giggled, feeling happy.`, illustration: '/illustrations/counting-stars/counting-stars-scene.png' },
      { text: `After counting to ten, Benny took a deep breath and let it out slowly. The room was quiet, with only the soft sounds of night outside. He snuggled back under his soft, warm blanket. Benny whispered, "Goodnight, stars. Goodnight, moon. Goodnight, sleepy room."` },
      { text: `Feeling cozy and safe, Benny closed his eyes. He thought about all the wonderful dreams waiting for him. With one last glance at the sparkling stars, he drifted off to sleep, counting his dreams one by one. And in his heart, he knew that the stars would be there, shining bright till morning light.`, illustration: '/illustrations/counting-stars/counting-stars-ending.png' },
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
