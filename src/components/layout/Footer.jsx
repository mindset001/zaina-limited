import { Mail, Phone, Globe, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import { company } from '../../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-navy-900 py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Zaina Nigeria Limited" className="h-10 w-auto rounded-sm" />
              <span className="font-display text-xl font-semibold text-white">
                ZAINA<span className="brand-text"> NIGERIA</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-200/70">
              {company.tagline} Incorporated {company.founded}, {company.rc}.
            </p>
          </div>

          <div>
            <h4 className="section-eyebrow mb-4 text-brand-400">Contact</h4>
            <ul className="space-y-3 text-sm text-mist-200/80">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400" /> {company.phone}
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-brand-400" /> {company.website}
              </li>
              {company.emails.map((email) => (
                <li key={email} className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-400" /> {email}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-eyebrow mb-4 text-brand-400">Head Office</h4>
            <p className="flex items-start gap-3 text-sm text-mist-200/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
              Abuja, Federal Capital Territory, Nigeria
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-mist-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.rc}</p>
        </div>
      </Container>
    </footer>
  )
}
