import { ShieldCheck, Users, AlertTriangle, GraduationCap, Layers } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { corporateCulture, whoWeAre, onePrinciples } from '../../data/content'

const ICONS = [Users, ShieldCheck, AlertTriangle, GraduationCap, Layers]

export default function Culture() {
  return (
    <section id="culture" className="relative bg-navy-900 py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Corporate Culture</Eyebrow>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Leadership built on integrity
            </h2>
            <div className="mt-6 space-y-4">
              {corporateCulture.split('\n\n').map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-mist-200/75">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              One company, one standard
            </h2>
            <div className="mt-6 space-y-4">
              {whoWeAre.split('\n\n').map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-mist-200/75">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <Eyebrow>One Company</Eyebrow>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              The key principles we operate by
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {onePrinciples.map((p, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col items-start rounded-xl border border-white/10 bg-navy-950/50 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15">
                      <Icon size={18} className="text-brand-400" />
                    </div>
                    <h4 className="mt-4 font-semibold text-white">{p.title}</h4>
                    <p className="mt-2 text-sm text-mist-200/65">{p.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
