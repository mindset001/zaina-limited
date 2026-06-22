export default function Eyebrow({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-8 bg-brand-500" />
      <span className="section-eyebrow">{children}</span>
    </div>
  )
}
