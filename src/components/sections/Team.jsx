import { Users2, Wrench } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { managementTeam, technicalTeam } from '../../data/content'

export default function Team() {
  return (
    <section id="team" className="relative bg-paper py-28 dark:bg-navy-950">
      <Container>
        <Reveal>
          <Eyebrow>Our People</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-navy-900 dark:text-white sm:text-4xl">
            Management & Technical Expertise
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm dark:border-white/10 dark:bg-navy-900/60 dark:shadow-none">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src="/images/team-presentation.jpg"
                  alt="Management team in a strategy session"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10">
                  <Users2 className="text-brand-600 dark:text-brand-400" size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900 dark:text-white">
                  Management Team
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-mist-200/75">
                  {managementTeam}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm dark:border-white/10 dark:bg-navy-900/60 dark:shadow-none">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src="/images/engineering-blueprint.jpg"
                  alt="Technical team reviewing engineering drawings"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10">
                  <Wrench className="text-brand-600 dark:text-brand-400" size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900 dark:text-white">
                  Technical Team
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-mist-200/75">
                  {technicalTeam}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
