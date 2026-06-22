import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function StatCounter({ to, suffix = '', prefix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, to])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-semibold text-navy-900 dark:text-white sm:text-5xl">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-slate-400 dark:text-mist-200/70">
        {label}
      </div>
    </motion.div>
  )
}
