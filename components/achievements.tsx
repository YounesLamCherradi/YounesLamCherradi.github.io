import Image from 'next/image'
import { BadgeCheck, CalendarDays, ImageIcon } from 'lucide-react'
import { certifications, events, highlights, milestones } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title={
              <>
                Recognition earned,{' '}
                <span className="font-display font-normal italic text-forest">work delivered.</span>
              </>
            }
            description="Distinctions, invitations and certifications alongside results from delivered projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={(i % 3) * 70} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_18px_40px_-24px_rgba(20,40,30,0.35)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-forest">
                  {h.image ? (
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_60%)]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]"
                      />
                      <span className="relative flex items-center gap-2 text-xs text-white/50">
                        <ImageIcon className="size-4" aria-hidden="true" />
                        Photo to be added
                      </span>
                    </div>
                  )}
                  {h.stat && (
                    <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-forest shadow-sm backdrop-blur">
                      {h.stat}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald">{h.context}</p>
                  <h3 className="mt-2 text-lg font-medium leading-snug text-balance">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.label} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col bg-card p-6 transition-colors duration-300 hover:bg-sand/60">
                <p className="text-4xl font-medium tracking-tight text-forest">{m.value}</p>
                <p className="mt-2 text-sm font-medium">{m.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div>
              <h3 className="text-2xl font-medium tracking-tight">Certifications & training</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Industry credentials across security fundamentals, network security and privileged access
                management.
              </p>
              <div className="mt-8">
                <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-emerald">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Events participation
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {events.map((e) => (
                    <li
                      key={e.name}
                      className="flex items-start gap-4 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors duration-300 hover:border-forest/30"
                    >
                      <span className="mt-0.5 shrink-0 rounded-full bg-forest/10 px-2.5 py-0.5 font-mono text-xs text-forest">
                        {e.year}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">{e.name}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{e.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <li className="flex items-start gap-4 px-5 py-4 transition-colors duration-300 hover:bg-sand/50 sm:items-center">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest sm:mt-0">
                    <BadgeCheck className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-snug">{c.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {c.issuer} · {c.kind}
                    </p>
                  </div>
                  <span className="hidden shrink-0 text-right text-xs text-muted-foreground sm:block">{c.status}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
