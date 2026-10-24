'use client'

import { useEffect, useState } from 'react'

// Locally hosted truck footage keeps the hero video independent of third-party availability.
const videoUrl = '/gss-dumpster-truck.mp4'

/** Loads the decorative clip only when motion and data-saver settings allow it. */
export function HeroVideo() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduceMotion && !connection?.saveData) setEnabled(true)
  }, [])

  return <video autoPlay={enabled} className="absolute inset-0 z-0 size-full object-cover object-center" poster="/dumpster-hero.png" muted loop playsInline preload={enabled ? 'auto' : 'none'} aria-hidden="true" onCanPlay={(event) => { void event.currentTarget.play().catch(() => {}) }}><source src={videoUrl} type="video/mp4" /></video>
}
