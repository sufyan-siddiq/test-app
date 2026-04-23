import { motion } from 'framer-motion'
import { FiBookOpen, FiFeather, FiUsers } from 'react-icons/fi'
import { authorInfo } from '../data/mockData'

const About = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold md:text-5xl">About the Author</h1>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <motion.img
          src={authorInfo.profileImage}
          alt={authorInfo.name}
          className="mx-auto aspect-square w-full max-w-xs rounded-full border border-slate-200 object-cover [clip-path:polygon(8%_0,92%_0,100%_10%,100%_90%,92%_100%,8%_100%,0_90%,0_10%)] shadow-xl dark:border-slate-700 sm:max-w-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-600">About John</p>
          <h2 className="mt-2 text-2xl font-semibold">{authorInfo.tagline}</h2>
          <div className="my-4 h-px w-full bg-slate-200 dark:bg-slate-700" />
          <p className="text-slate-600 dark:text-slate-300">{authorInfo.bio}</p>
          <p className="mt-4 font-semibold text-slate-700 dark:text-slate-200">{authorInfo.mission}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <FiBookOpen /> Published Works
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Contemporary fiction focused on emotional realism, growth, and meaningful human connection.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <FiFeather /> Writing Style
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Character-first storytelling, cinematic scenes, and a balanced voice that is reflective yet accessible.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <FiUsers /> Reader Community
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Built for readers who enjoy hopeful, thoughtful novels and practical insights for better writing habits.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
