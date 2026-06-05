'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Oversikt', href: '/topline' },
  { label: 'Butikk', href: '/butikk' },
  { label: 'Økonomi', href: '/okonomi' },
  { label: 'Produkter', href: '/produkter' },
  { label: 'Kunder', href: '/kunder' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-60 flex flex-col z-10"
      style={{ backgroundColor: '#353539' }}
    >
      {/* Logo */}
      <div className="px-6 py-7" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Image
          src="/bohus-logo.svg"
          alt="Bohus"
          width={0}
          height={0}
          unoptimized
          className="brightness-0 invert"
          style={{ width: '100px', height: 'auto' }}
          priority
        />
        <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Styringsdashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.color = '#FFFFFF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                    }
                  }}
                >
                  <span
                    className="w-1 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: isActive ? '#C8102E' : 'transparent' }}
                  />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Bohus © 2026
        </p>
      </div>
    </aside>
  )
}
