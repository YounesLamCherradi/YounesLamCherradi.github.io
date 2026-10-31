import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-ink py-24 text-[#f7f5f0] sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Services"
              title={
                <>
                  How I can help{' '}
                  <span className="font-display font-normal italic text-[#a9d6bc]">your team.</span>
                </>
              }
              description="Focused engagements with clear deliverables. Scope is agreed up front, and results are reported as they are — no inflated promises."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/images/security-monitoring.png"
                alt="Monitor showing a calm, well-organised security monitoring dashboard"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80} className="h-full">
              <article className="group flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-forest-deep">
                <p className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{service.problem}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{service.help}</p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label="Deliverables">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/65 transition-colors group-hover:bg-emerald/20 group-hover:text-[#cfe3d6]"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <Reveal delay={240} className="h-full">
            <a
              href="#contact"
              className="group flex h-full flex-col justify-between gap-8 bg-forest-deep p-7 transition-colors duration-300 hover:bg-forest"
            >
              <p className="font-mono text-xs text-white/40">{String(services.length + 1).padStart(2, '0')}</p>
              <div>
                <h3 className="text-lg font-medium tracking-tight">Not sure which fits?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Describe the problem and we will scope the right engagement together.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#a9d6bc]">
                  Discuss a project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
