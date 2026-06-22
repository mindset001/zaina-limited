import { HardHat } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { ongoingProjects } from '../../data/content'

export default function Ongoing() {
  return (
    <section id="ongoing" className="relative bg-navy-950 py-28">
      <Container>
        <Reveal>
          <Eyebrow>In Progress</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Ongoing Projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative border-l border-white/10 pl-8">
            {ongoingProjects.map((p, i) => (
              <Reveal key={p.client} delay={i * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 ring-4 ring-navy-950">
                    <HardHat size={12} className="text-brand-400" />
                  </span>
                  <h4 className="font-display text-lg font-semibold text-white">{p.client}</h4>
                  <p className="mt-1 text-sm text-mist-200/70">{p.project}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/images/modern-estate.jpg"
                alt="Pearl Garden Estate housing development"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-navy-950">
                  Pearl Garden Estate
                </span>
                <p className="mt-2 text-sm text-white/90">
                  Uke, Tudun Wada, Nasarawa State
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
