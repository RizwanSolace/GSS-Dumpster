'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'

const links = [
  ['Dumpster sizes', '/dumpster-sizes'],
  ['Residential', '/residential-dumpsters'],
  ['Commercial', '/commercial-dumpsters'],
  ['Service areas', '/service-areas'],
  ['Materials', '/acceptable-materials'],
  ['Contact', '/contact'],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return <>
    <div className="bg-[#171a18] px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">Flat-rate quotes · Same-day delivery may be available · <a className="font-black text-[#ffb000]" href="tel:7132520906">(713) 252-0906</a></div>
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f6f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="GSS General Site Services home"><img src="/gss-logo.svg" alt="GSS General Site Services" className="h-[68px] w-auto object-contain sm:h-[82px]" /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 text-[12px] font-bold 2xl:gap-1 lg:flex">{links.map(([label, href]) => { const active = pathname === href; return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={`rounded-full px-2 py-2 transition 2xl:px-3 ${active ? 'bg-[#fff0cd] text-[#9c5111] ring-1 ring-[#e77817]/20' : 'text-[#4f5751] hover:bg-white hover:text-[#e77817]'}`}>{label}</Link> })}</nav>
        <div className="flex items-center gap-2"><a href="tel:7132520906" className="hidden items-center gap-1.5 rounded-full bg-[#202321] px-3 py-3 text-xs font-bold text-white lg:flex 2xl:gap-2 2xl:px-4 2xl:text-sm"><Phone className="size-4" /> Call now</a><button type="button" onClick={() => setOpen(!open)} className="rounded-full border border-black/15 p-3 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X className="size-5"/> : <Menu className="size-5"/>}</button></div>
      </div>
      {open && <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-1 border-t border-black/10 bg-[#f7f6f2] px-4 py-3 sm:px-6 lg:hidden">{links.map(([label, href]) => { const active = pathname === href; return <Link onClick={() => setOpen(false)} key={href} href={href} aria-current={active ? 'page' : undefined} className={`rounded-lg px-3 py-3 text-sm font-bold ${active ? 'bg-[#fff0cd] text-[#9c5111]' : 'hover:bg-white'}`}>{label}</Link> })}<a className="col-span-2 rounded-lg px-3 py-3 font-black text-[#b76111]" href="tel:7132520906">Call (713) 252-0906</a></nav>}
    </header>
  </>
}
