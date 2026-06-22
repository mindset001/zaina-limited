import { Target, Eye, Compass } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import StatCounter from '../ui/StatCounter'
import { intro, mission, vision, strategy, values, company } from '../../data/content'

export default function About() {
  return (
    <section id="about" className="relative bg-navy-950 py-28">
      <Container>
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            A legacy of trust, built since {company.founded}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {intro.split('\n\n').map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-mist-200/75">{para}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <StatCounter to={1987} label="Year Founded" />
          <StatCounter to={33} suffix="+" label="Years of Operation" />
          <StatCounter to={15} suffix="B+" prefix="₦" label="Turnover" />
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-navy-900/60 p-8">
              <Target className="text-brand-400" size={28} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-200/75">{mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-navy-900/60 p-8">
              <Eye className="text-brand-400" size={28} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-200/75">{vision}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-white/10 bg-navy-900/60 p-8">
              <Compass className="text-brand-400" size={28} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Strategy</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-200/75">{strategy}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <Eyebrow>Our Values</Eyebrow>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              The pillars of our success
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-white/10 bg-navy-900/40 p-5 transition hover:border-brand-500/40 hover:bg-navy-900/70">
                  <span className="font-display text-2xl text-brand-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 font-semibold text-white">{v.title}</h4>
                  <p className="mt-2 text-sm text-mist-200/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
