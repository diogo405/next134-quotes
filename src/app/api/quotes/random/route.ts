export function GET() {
  const unmotivationalQuotes = [
    'Why strive for greatness when mediocrity is so much easier?',
    'Dream big, then take a long nap.',
    "Procrastination: because there's always tomorrow... or the day after... or the day after that.",
    "Don't worry about failure; you're already failing by trying.",
    'Why be a millionaire when you can be a thousandaire?',
    'The key to success is to avoid it at all costs.',
    "You miss 100% of the shots you don't take, but taking shots is overrated anyway.",
    "Don't aim for the stars; aim for the couch.",
    'Ambition is overrated; just go with the flow.',
    'Hard work pays off in the future, but laziness pays off now.',
    'Why be productive when you can be perfectly mediocre?',
    'Life is short, so why waste it doing anything worthwhile?',
    "Success is for those who can't appreciate a good nap.",
    'Why run the race when you can sit on the sidelines and watch?',
    "Strive for average, and you'll never be disappointed.",
  ]

  // Accessing an unmotivational quote
  const randomUnmotivationalQuote =
    unmotivationalQuotes[
      Math.floor(Math.random() * unmotivationalQuotes.length)
    ]

  return new Response(JSON.stringify({ quote: randomUnmotivationalQuote }))
}
