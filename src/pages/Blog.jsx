import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiSearch, FiTag } from 'react-icons/fi'
import { blogPosts } from '../data/mockData'

const Blog = () => {
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
      return blogPosts
    }

    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-5xl">Blog & Articles</h1>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300">
        Insights on writing craft, publishing, and creative discipline.
      </p>
      <div className="flex w-full max-w-3xl items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <FiSearch className="text-slate-500" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles by title, category, or keyword..."
          aria-label="Search articles"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <img src={post.image} alt={post.title} className="h-56 w-full rounded-xl object-cover" />
            <p className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <FiCalendar /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiTag /> {post.category}
              </span>
            </p>
            <div className="my-3 h-px w-full bg-slate-200 dark:bg-slate-700" />
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400">No posts match your search. Try a different keyword.</p>
      )}
    </section>
  )
}

export default Blog
