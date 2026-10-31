import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { projects, type Project } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

function displayHost(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function ProjectLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-forest underline-offset-4 hover:underline"
    >
      {displayHost(url)}
      <ArrowUpRight
        className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function ProjectImage({ project, sizes, className }: { project: Project; sizes: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-sand', className)}>
      <Image
        src={project.image || '/placeholder.svg'}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute left-4 top-4 rounded-full bg-[#f7f5f0]/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-forest backdrop-blur">
        {project.category}
      </span>
    </div>
  )
}

function Contribution({ project, limit }: { project: Project; limit?: number }) {
  const items = limit ? project.contribution.slice(0, limit) : project.contribution
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald">My role</p>
      <p className="mt-1 text-sm font-medium">{project.role}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((c) => (
          <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-foreground/75">
            <Check className="mt-0.5 size-4 shrink-0 text-emerald" aria-hidden="true" />
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies and focus areas">
      {items.map((s) => (
        <li key={s} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
          {s}
        </li>
      ))}
    </ul>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/5 lg:grid-cols-12"
    >
      <div className="relative lg:col-span-7">
        <ProjectImage
          project={project}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="aspect-[16/10] h-full lg:aspect-auto lg:min-h-[420px]"
        />
        {project.outcomes && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.outcomes.map((o) => (
              <div key={o.label} className="rounded-xl bg-[#1c211e]/85 px-4 py-2.5 text-[#f7f5f0] backdrop-blur">
                <span className="text-xl font-medium tracking-tight">{o.value}</span>
                <span className="ml-2 text-xs text-[#f7f5f0]/70">{o.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 p-6 sm:p-8 lg:col-span-5">
        <div>
          <p className="font-mono text-xs text-muted-foreground">Featured · {project.context}</p>
          <h3 id={`${project.slug}-title`} className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>
        <Contribution project={project} />
        <div className="mt-auto">
          <Stack items={project.stack} />
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
    >
      <ProjectImage project={project} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <p className="font-mono text-xs text-muted-foreground">{project.context}</p>
          <h3 id={`${project.slug}-title`} className="mt-1.5 text-xl font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        </div>
        <Contribution project={project} limit={3} />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <Stack items={project.stack.slice(0, 3)} />
          {project.url && <ProjectLink url={project.url} />}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="work" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Projects where security met{' '}
                <span className="font-display font-normal italic text-forest">real delivery.</span>
              </>
            }
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Five platforms across security operations, education, heritage and youth engagement. Images are
            illustrative until approved screenshots are added.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
