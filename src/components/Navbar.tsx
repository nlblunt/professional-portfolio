import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">Portfolio</NavLink>
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-600'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-600'}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200 hover:text-blue-600'}`
            }
          >
            Skills
          </NavLink>

          <ThemeToggle />
        </div>
        {/* Mobile menu toggle (very simple) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button
        aria-label="Menu"
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-sm">
          <NavLink to="/" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Home</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Portfolio</NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Skills</NavLink>
          <div className="px-4 py-3 border-t dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  )
}
