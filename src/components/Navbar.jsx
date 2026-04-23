import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Books', to: '/books' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-3 py-3">
        <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-wide">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            J
          </span>
          <span className="text-sm sm:text-base">John Carter</span>
        </NavLink>

        <nav
          id="primary-nav"
          aria-label="Primary Navigation"
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors hover:text-indigo-600 ${
                      isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                  onClick={handleNavClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-12 place-items-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((previousState) => !previousState)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
