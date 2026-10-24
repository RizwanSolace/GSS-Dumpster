'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Dumpster quote request - ${form.get('name')}`
    const body = [`Name: ${form.get('name')}`,`Phone: ${form.get('phone')}`,`Email: ${form.get('email')}`,`Delivery ZIP: ${form.get('zip')}`,`Project: ${form.get('project')}`,`Preferred delivery date: ${form.get('date') || 'Flexible'}`,`Details: ${form.get('details') || 'None provided'}`].join('\n')
    window.location.href = `mailto:info@gssdumpsters.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return <form onSubmit={submit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-bold">Name<input required name="name" autoComplete="name" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="Your name"/></label>
    <label className="text-sm font-bold">Phone<input required name="phone" type="tel" autoComplete="tel" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="(713) 555-0123"/></label>
    <label className="text-sm font-bold">Email<input required name="email" type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="you@example.com"/></label>
    <label className="text-sm font-bold">Delivery ZIP code<input required name="zip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="mt-2 h-12 w-full rounded-xl border border-black/15 px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="5-digit ZIP"/></label>
    <label className="text-sm font-bold">Project type<select name="project" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]"><option>Home cleanout</option><option>Roofing</option><option>Remodel</option><option>Construction</option><option>Demolition</option><option>Landscaping</option><option>Other</option></select></label>
    <label className="text-sm font-bold">Preferred delivery date<input name="date" type="date" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]"/></label>
    <label className="text-sm font-bold sm:col-span-2">Project details<textarea name="details" rows={4} className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#ffb000]" placeholder="What are you clearing? Any placement or timing notes?"/></label>
  </div><button className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#ffb000] font-black transition hover:bg-[#f3a500] sm:w-auto sm:px-8">Send quote request <ArrowRight className="size-4"/></button>{sent && <p role="status" className="mt-4 rounded-lg bg-[#eef6ed] p-3 text-sm">Your email app should open with the request ready to send. If it did not, email <a className="font-bold underline" href="mailto:info@gssdumpsters.com">info@gssdumpsters.com</a> or call GSS.</p>}</form>
}
