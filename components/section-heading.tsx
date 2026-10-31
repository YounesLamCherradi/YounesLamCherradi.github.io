import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = 'light',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p
        className={cn(
          'mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]',
          tone === 'dark' ? 'text-[#8fc7a8]' : 'text-emerald',
        )}
      >
        <span className={cn('h-px w-8', tone === 'dark' ? 'bg-[#8fc7a8]' : 'bg-emerald')} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            tone === 'dark' ? 'text-white/65' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
