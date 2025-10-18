'use client'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/chat-room', label: 'Chat' },
    { to: '/timeline', label: 'Timeline' },
  ]

  return (
    <nav className="bg-[#0f1923] text-white px-[36px] py-6 flex items-center justify-between shadow relative">
      <div className="flex items-center gap-3">
        <img src="/asset/logo2.png" alt="Logo" className=" h-8" />
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to
          return (
            <div key={item.to} className="flex flex-col items-center relative">
              <Link
                to={item.to}
                className={`hover:bg-[#292929] transition-colors mx-[7px] rounded-lg flex items-center font-bold tracking-wide ${isActive ? 'text-[#ff6f6f] bg-[#232323]' : ''}`}
                style={{ letterSpacing: '2px' }}
              >
                <span className='px-[16px] py-[7px]'>{item.label}</span>
              </Link>
              {isActive && (
                <div className="h-[6px] w-[70%] bg-[#ff6f6f] rounded-full mt-2" />
              )}
            </div>
          )
        })}
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#292929] rounded-b shadow-md flex flex-col md:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-6 py-4 hover:bg-cyan-700 font-bold ${location.pathname === item.to ? 'border-b-2 border-red-500' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
