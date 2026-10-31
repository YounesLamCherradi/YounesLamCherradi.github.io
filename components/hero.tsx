import Image from 'next/image'
import { ArrowRight, ArrowDownRight } from 'lucide-react'

const disciplines = ['Application Security', 'SIEM Integration', 'Full-Stack Development', 'Secure Deployment']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest-deep text-[#f7f5f0]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 30% 40%, black 30%, transparent 75%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8fc7a8]">
            <span className="h-px w-8 bg-[#8fc7a8]" aria-hidden="true" />
            Security Engineer
          </p>
          <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Security that holds up{' '}
            <span className="font-display font-normal italic text-[#a9d6bc]">in real systems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            {"I'm Younes — a security engineer who also builds, integrates and deploys the applications I protect. I help teams ship software that is dependable, observable and secure by design."}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f5f0] px-6 py-3.5 text-sm font-medium text-forest-deep transition-all hover:bg-white"
            >
              Explore my work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Discuss a project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#eef0ef] ring-1 ring-white/10">
            <Image
              src="/images/younes-portrait.jpg"
              alt="Portrait of Younes Lamhamedi-Cherradi"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-forest/90 p-5 backdrop-blur sm:left-auto sm:right-[-1.5rem] sm:w-72">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8fc7a8]">Primary focus</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Bringing security into development, deployment and day-to-day operations.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-6">
          {disciplines.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-white/60">
              <span className="size-1.5 rounded-full bg-emerald" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
