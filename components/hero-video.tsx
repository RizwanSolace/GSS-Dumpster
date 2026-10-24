// Locally hosted truck footage keeps the hero video independent of third-party availability.
const videoUrl = '/gss-dumpster-truck-640.mp4'

/** The video and poster are emitted in the initial HTML so playback can start before hydration. */
export function HeroVideo() {
  return <video autoPlay className="absolute inset-0 z-0 size-full object-cover object-center" poster="/dumpster-hero.jpg" muted loop playsInline preload="auto" aria-hidden="true"><source src={videoUrl} type="video/mp4" /></video>
}
