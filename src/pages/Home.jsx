import { motion } from 'framer-motion'
import { FiBookOpen, FiStar } from 'react-icons/fi'
import { books, featuredBook, authorInfo } from '../data/mockData'

const Home = () => {
  const featuredBooks = books.slice(0, 3)

  return (
    <section className="space-y-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Welcome</p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{authorInfo.name}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200">{authorInfo.tagline}</p>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{authorInfo.intro}</p>
        </motion.div>
        <motion.img
          src={authorInfo.profileImage}
          alt={`${authorInfo.name} profile`}
          className="mx-auto aspect-square w-full max-w-xs rounded-full border border-slate-200 object-cover [clip-path:polygon(8%_0,92%_0,100%_10%,100%_90%,92%_100%,8%_100%,0_90%,0_10%)] shadow-xl dark:border-slate-700 sm:max-w-sm"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-lg dark:border-indigo-900/60 dark:bg-slate-900"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">Featured Work</p>
        <h2 className="mt-2 flex items-center gap-2 text-xl font-bold">
          <FiStar /> {featuredBook.title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{featuredBook.description}</p>
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold md:text-3xl">Featured Books</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredBooks.map((book, index) => (
          <motion.article
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900"
            key={book.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <img src={book.image} alt={book.title} className="h-56 w-full rounded-xl object-cover" />
            <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold">
              <FiBookOpen /> {book.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{book.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Home
