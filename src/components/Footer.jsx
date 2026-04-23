import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/70 py-10 text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">John Carter</h3>
          <p className="mt-2 text-sm">Modern fiction with heart, depth, and hopeful storytelling.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Quick Links</h4>
          <div className="mt-2 space-y-1 text-sm">
            <p>
              <NavLink className="hover:text-indigo-600" to="/">
                Home
              </NavLink>
            </p>
            <p>
              <NavLink className="hover:text-indigo-600" to="/about">
                About
              </NavLink>
            </p>
            <p>
              <NavLink className="hover:text-indigo-600" to="/books">
                Books
              </NavLink>
            </p>
            <p>
              <NavLink className="hover:text-indigo-600" to="/blog">
                Blog
              </NavLink>
            </p>
            <p>
              <NavLink className="hover:text-indigo-600" to="/contact">
                Contact
              </NavLink>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Contact</h4>
          <p>
            <a className="hover:text-indigo-600" href="mailto:hello@johncarterbooks.com">
              hello@johncarterbooks.com
            </a>
          </p>
          <p className="mt-1 text-sm">Boston, Massachusetts</p>
        </div>
      </div>
      <div className="mx-auto mt-6 w-[92%] max-w-6xl border-t border-slate-200 pt-4 text-center text-sm dark:border-slate-800">
        <p>© {new Date().getFullYear()} John Carter. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
