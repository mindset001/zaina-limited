import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import {
  projectsIntro,
  generalSupplies,
  technicalPartnerSupplies,
  construction,
} from '../../data/content'

const TABS = [
  { key: 'general', label: 'General Supplies', data: generalSupplies },
  { key: 'partner', label: 'Supplies w/ Technical Partners', data: technicalPartnerSupplies },
  { key: 'construction', label: 'Construction', data: construction },
]

export default function Projects() {
  const [active, setActive] = useState(TABS[0].key)
  const current = TABS.find((t) => t.key === active)

  return (
    <section id="projects" className="relative bg-paper py-28">
      <Container>
        <Reveal>
          <Eyebrow>Track Record</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Projects Executed
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
            {projectsIntro}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  active === tab.key
                    ? 'bg-brand-500 text-white'
                    : 'border border-line text-slate-500 hover:border-brand-400 hover:text-navy-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {current.data.map((item, i) => (
              <motion.div
                key={`${active}-${item.client}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-sm"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                  <Building2 size={16} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">{item.client}</h4>
                  <p className="mt-1 text-sm text-slate-500">{item.project}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
