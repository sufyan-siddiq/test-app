import authorJohn from '../assets/author-john.jpg'
import bookLightBetweenStations from '../assets/book-light-between-stations.jpg'
import bookLettersHarbor from '../assets/book-letters-harbor.jpg'
import bookWinterNotes from '../assets/book-winter-notes.jpg'
import bookSunriseAlder from '../assets/book-sunrise-alder.jpg'
import bookQuietMap from '../assets/book-quiet-map.jpg'
import blogCharacters from '../assets/blog-characters.jpg'
import blogRoutine from '../assets/blog-routine.jpg'
import blogSetting from '../assets/blog-setting.jpg'
import blogEditing from '../assets/blog-editing.jpg'
import blogResearch from '../assets/blog-research.jpg'
import blogLaunch from '../assets/blog-launch.jpg'

export const authorInfo = {
  name: 'John Carter',
  tagline: 'Writing stories that connect people, places, and purpose.',
  intro:
    'John Carter is a modern fiction writer focused on emotional storytelling, grounded characters, and hopeful endings.',
  bio: `John Carter is a novelist and essayist based in Boston, known for stories about family, identity, and second chances.
His writing has appeared in literary journals and cultural magazines across the US and Europe.`,
  mission:
    'My mission is to publish meaningful books that leave readers feeling inspired, informed, and understood.',
  profileImage: authorJohn,
}

export const featuredBook = {
  title: 'The Light Between Stations',
  description:
    'A layered story about unexpected friendship, city life, and the courage to begin again.',
  image: bookLightBetweenStations,
}

export const books = [
  {
    title: 'The Light Between Stations',
    description:
      'A heartfelt novel about two strangers who meet on a late train and reshape each other’s future.',
    image: bookLightBetweenStations,
  },
  {
    title: 'Letters to the Harbor',
    description:
      'A reflective journey through old letters, family history, and a city by the sea.',
    image: bookLettersHarbor,
  },
  {
    title: 'Winter Notes',
    description:
      'A gentle, uplifting story about grief, healing, and finding community in unexpected places.',
    image: bookWinterNotes,
  },
  {
    title: 'Sunrise at Alder Street',
    description:
      'A coming-of-age novel about creativity, friendship, and choosing your own direction.',
    image: bookSunriseAlder,
  },
  {
    title: 'The Quiet Map',
    description:
      'A thoughtful mystery that follows a teacher decoding journal entries from another era.',
    image: bookQuietMap,
  },
]

export const blogPosts = [
  {
    title: 'How to Build Characters Readers Remember',
    excerpt:
      'A practical guide to empathy, believable conflict, and dialogue that feels natural.',
    date: 'March 10, 2026',
    image: blogCharacters,
    category: 'Writing Craft',
  },
  {
    title: 'My Weekly Writing Routine (Idea to Draft)',
    excerpt:
      'The exact process I use each week to move from scattered ideas to finished chapters.',
    date: 'February 22, 2026',
    image: blogRoutine,
    category: 'Productivity',
  },
  {
    title: 'Why Setting Matters in Storytelling',
    excerpt:
      'How locations shape mood, pace, and character decisions in powerful fiction.',
    date: 'January 14, 2026',
    image: blogSetting,
    category: 'Story Design',
  },
  {
    title: 'Editing Your First Draft Without Stress',
    excerpt:
      'A calm, step-by-step method to revise structure, voice, and sentence rhythm.',
    date: 'December 19, 2025',
    image: blogEditing,
    category: 'Editing',
  },
  {
    title: 'Balancing Research and Imagination',
    excerpt:
      'Learn when to gather details and when to trust your narrative instincts.',
    date: 'November 28, 2025',
    image: blogResearch,
    category: 'Research',
  },
  {
    title: 'How I Plan Book Launch Content',
    excerpt:
      'A simple marketing checklist for announcing books with clarity and consistency.',
    date: 'October 30, 2025',
    image: blogLaunch,
    category: 'Publishing',
  },
]
