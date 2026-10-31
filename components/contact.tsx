'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { contact, services } from '@/lib/site'
import { SectionHeading } from './section-heading'

const fieldClass =
  'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-[#8fc7a8] focus:outline-none focus:ring-2 focus:ring-[#8fc7a8]/30'

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!contact.email) {
      setStatus('Thank you. Messaging opens once a confirmed contact email is added to the site.')
      return
    }
    const subject = `Project enquiry: ${data.get('service')}`
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Opening your email client…')
  }

  const links = [
    { label: 'Email', href: contact.email ? `mailto:${contact.email}` : null },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'GitHub', href: contact.github },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href))

  return (
    <section id="contact" className="scroll-mt-16 bg-forest-deep py-24 text-[#f7f5f0] sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Contact"
            title={
              <>
                {"Have a system that needs to be "}
                <span className="font-display font-normal italic text-[#a9d6bc]">built or secured?</span>
              </>
            }
            description="Tell me briefly what you're working on. I'll reply with whether I'm a good fit and how I would approach it."
          />
          {links.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-white/60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-white/75">
              Name
              <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/75">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-white/75">
            Service needed
            <select name="service" required defaultValue="" className={`${fieldClass} [&>option]:text-ink`}>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Something else</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/75">
            Project description
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className={`${fieldClass} resize-none`}
              placeholder="A few lines about the system, the problem and your timeline."
            />
          </label>
          <button
            type="submit"
            className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f5f0] px-6 py-3.5 text-sm font-medium text-forest-deep transition-colors hover:bg-white"
          >
            Send enquiry
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p role="status" aria-live="polite" className="min-h-5 text-sm text-[#a9d6bc]">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}
