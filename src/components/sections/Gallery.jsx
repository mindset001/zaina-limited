import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Eyebrow from '../ui/Eyebrow'
import { gallery } from '../../data/content'

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-paper-soft py-28 dark:bg-navy-900">
      <Container>
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-navy-900 dark:text-white sm:text-4xl">
            Our work, on the ground
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.image} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-sm dark:border-white/10 dark:shadow-none"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-brand-500/90 px-3 py-1 text-xs font-semibold text-navy-950">
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm text-white/90">{item.caption}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
