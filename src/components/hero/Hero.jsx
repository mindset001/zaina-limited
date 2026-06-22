import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Scene from './Scene'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.8]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/40" />

      <Container className="relative z-10 flex h-full flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-eyebrow mb-5 text-brand-300"
        >
          RC: 105264 — Since 1987
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Building Nigeria's
          <span className="brand-text"> infrastructure </span>
          and supply chains
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-mist-200/85"
        >
          A turnkey partner for construction and supplies — from front-end
          engineering design through long-term operation and maintenance,
          delivered with a 33-year record of trust.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-brand-400"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist-200/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
