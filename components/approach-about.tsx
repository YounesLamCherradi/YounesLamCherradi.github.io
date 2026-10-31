import { approach, skills } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title={
              <>
                Security as part of the work,{' '}
                <span className="font-display font-normal italic text-forest">not an afterthought.</span>
              </>
            }
          />
        </Reveal>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <li className="group border-t border-foreground/15 pt-6 transition-colors hover:border-emerald">
                <span className="font-mono text-sm text-emerald">{item.step}</span>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="About" title="An engineer who protects what he builds." />
          <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-foreground/75">
            <p>
              My primary discipline is security engineering. What sets my work apart is that I can also build,
              integrate and deploy the applications themselves — so security decisions are made with a clear view of
              how the system really works.
            </p>
            <p>
              I bring security into each stage: access and data handling during development, configuration and
              secrets during deployment, and monitoring once a system is in operation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-emerald">{s.group}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
