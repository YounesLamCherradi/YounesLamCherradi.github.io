import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Approach, About } from '@/components/approach-about'
import { Contact } from '@/components/contact'
import { Achievements } from '@/components/achievements'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Achievements />
        <Approach />
        <About />
        <Contact />
      </main>
      <footer className="bg-forest-deep text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 px-6 py-8 text-sm sm:flex-row">
          <p>{`© ${new Date().getFullYear()} Younes Lamhamedi-Cherradi`}</p>
          <p>Security Engineer · Build · Integrate · Deploy</p>
        </div>
      </footer>
    </>
  )
}
