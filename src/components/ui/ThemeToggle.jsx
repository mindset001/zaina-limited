import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useTheme()

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label="Toggle dark mode"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line transition hover:border-brand-400 dark:border-white/15 dark:hover:border-brand-400 ${className}`}
    >
      {isDark ? (
        <Sun size={16} className="text-brand-300" />
      ) : (
        <Moon size={16} className="text-slate-500" />
      )}
    </button>
  )
}
