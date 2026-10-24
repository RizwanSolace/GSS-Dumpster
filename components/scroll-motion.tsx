'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Adds gentle, viewport-triggered reveals while leaving all content visible without JS. */
export function ScrollMotion() {
  const pathname = usePathname()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    document.documentElement.classList.add('motion-ready')
    const sections = document.querySelectorAll<HTMLElement>('main > section:not(:first-child)')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
