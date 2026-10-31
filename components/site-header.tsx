'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest-deep/80 text-[#f7f5f0] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Younes Lamhamedi-Cherradi, home">
          <span className="flex size-8 items-center justify-center rounded-md border border-white/20 font-mono text-xs">
            YL
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Younes Lamhamedi-Cherradi
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#f7f5f0] px-4 py-2 text-sm font-medium text-forest-deep transition-colors hover:bg-white"
          >
            Discuss a project
          </a>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {[...navLinks, { href: '#contact', label: 'Contact' }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
