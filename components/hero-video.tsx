'use client'

import { useEffect, useRef } from 'react'

// Pexels footage: a collection truck actively empties dumpsters in a neighborhood.
const videoUrl = 'https://videos.pexels.com/video-files/34421895/14582054_3840_2160_30fps.mp4'
const posterUrl = 'https://images.pexels.com/videos/34421895/trash-bin-trash-truck-waste-management-34421895.jpeg?auto=compress&dpr=1&h=750&w=1260'

/** Loads the decorative clip only when motion and data-saver settings allow it. */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!video || reduceMotion || connection?.saveData) return

    video.src = videoUrl
    video.load()
    void video.play().catch(() => {})
  }, [])

  return <video ref={videoRef} className="absolute inset-0 z-0 size-full scale-110 object-cover object-center" poster={posterUrl} muted loop playsInline preload="none" aria-hidden="true" />
}
