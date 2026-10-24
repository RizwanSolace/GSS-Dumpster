'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [today, setToday] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')

  useEffect(() => {
    const now = new Date()
    const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
    setToday(localToday)
    setDeliveryDate((current) => current || localToday)
  }, [])
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }
  if (sent) return <div role="status" aria-live="polite" className="quote-success rounded-2xl border border-[#bfd8b9] bg-[#eef6ed] p-6 text-[#244521] sm:p-8"><div className="flex items-center gap-3"><CheckCircle2 aria-hidden="true" className="quote-success-check size-8 shrink-0 text-[#2d7838]"/><h3 className="text-xl font-bold">Quote request sent successfully.</h3></div></div>
  return <form onSubmit={submit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-bold">Name<input required name="name" autoComplete="name" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="Your name"/></label>
    <label className="text-sm font-bold">Phone<input required name="phone" type="tel" autoComplete="tel" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="(713) 555-0123"/></label>
    <label className="text-sm font-bold">Email<input required name="email" type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="you@example.com"/></label>
    <label className="text-sm font-bold">Delivery ZIP code<input required name="zip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="5-digit ZIP"/></label>
    <label className="text-sm font-bold">Project type<select name="project" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]"><option>Home cleanout</option><option>Roofing</option><option>Remodel</option><option>Construction</option><option>Demolition</option><option>Landscaping</option><option>Other</option></select></label>
    <label className="text-sm font-bold">Preferred delivery date<input name="date" type="date" min={today || undefined} value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]"/></label>
    <label className="text-sm font-bold sm:col-span-2">Project details<textarea name="details" rows={4} className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="What are you clearing? Any placement or timing notes?"/></label>
  </div><button className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#ffb000] font-black transition hover:bg-[#f3a500] sm:w-auto sm:px-8">Send quote request <ArrowRight className="size-4"/></button></form>
}
