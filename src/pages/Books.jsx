import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiSearch } from 'react-icons/fi'
import { books } from '../data/mockData'

const Books = () => {
  const [query, setQuery] = useState('')

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
      return books
    }

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.description.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-5xl">Books & Works</h1>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300">
        Explore selected books and publications by John Carter.
      </p>
      <div className="flex w-full max-w-3xl items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <FiSearch className="text-slate-500" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search books by title or description..."
          aria-label="Search books"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.map((book, index) => (
          <motion.article
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            key={book.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            <img src={book.image} alt={book.title} className="h-56 w-full rounded-xl object-cover" />
            <h2 className="mt-3 flex items-center gap-2 text-lg font-semibold">
              <FiBookOpen /> {book.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{book.description}</p>
          </motion.article>
        ))}
      </div>
      {filteredBooks.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400">No books found. Try another keyword.</p>
      )}
    </section>
  )
}

export default Books
