import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HardHat } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { ongoingProjects } from '../../data/content'

export default function Ongoing() {
  const [active, setActive] = useState(0)
  const current = ongoingProjects[active]

  return (
    <section id="ongoing" className="relative bg-paper-soft py-28 dark:bg-navy-950">
      <Container>
        <Reveal>
          <Eyebrow>In Progress</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-navy-900 dark:text-white sm:text-4xl">
            Ongoing Projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative border-l border-line pl-8 dark:border-white/10">
            {ongoingProjects.map((p, i) => {
              const isActive = i === active
              return (
                <Reveal key={p.client} delay={i * 0.1}>
                  <button
                    onClick={() => setActive(i)}
                    className="group relative mb-10 block w-full text-left last:mb-0"
                  >
                    <span
                      className={`absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-paper-soft dark:ring-navy-950 transition-colors ${
                        isActive ? 'bg-brand-500' : 'bg-brand-500/15'
                      }`}
                    >
                      <HardHat size={12} className={isActive ? 'text-white' : 'text-brand-600 dark:text-brand-400'} />
                    </span>
                    <h4
                      className={`font-display text-lg font-semibold transition-colors ${
                        isActive ? 'text-brand-600 dark:text-brand-400' : 'text-navy-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400'
                      }`}
                    >
                      {p.client}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-mist-200/70">{p.project}</p>
                  </button>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-sm dark:border-white/10 dark:shadow-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={`${current.client} — ${current.project}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/5 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.client}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-x-0 bottom-0 p-5"
                >
                  <span className="inline-block rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-white">
                    {current.client}
                  </span>
                  <p className="mt-2 text-sm text-white/90">{current.project}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
