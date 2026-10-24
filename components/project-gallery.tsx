import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Made for home projects',
    label: 'Residential rentals',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2018/08/IMG_1356-300x225.jpg',
    alt: 'GSS residential roll-off container',
    href: '/residential-dumpsters',
  },
  {
    title: 'A cleaner construction site',
    label: 'Commercial rentals',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2018/08/IMG_0529-1-e1531428221754-732x549.jpeg',
    alt: 'GSS roll-off container at a construction job site',
    href: '/commercial-dumpsters',
  },
  {
    title: 'Space for bigger projects',
    label: 'Roll-off containers',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2018/08/30-yard-container-sealy-tx-e1531259170184-732x976.jpeg',
    alt: '30 cubic yard GSS roll-off container',
    href: '/dumpster-sizes',
  },
  {
    title: 'Convenient driveway placement',
    label: 'Home cleanouts',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2018/08/residential-dumpster-rental-01-300x225.jpg',
    alt: 'GSS roll-off containers placed for residential cleanup projects',
    href: '/residential-dumpsters',
  },
  {
    title: 'Serving local communities',
    label: 'Local delivery',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2019/03/GSS-Dumpster-in-Brookshire-Tx.-e1551811457778.jpeg',
    alt: 'GSS dumpster in Brookshire, Texas',
    href: '/service-areas',
  },
  {
    title: 'Roll-off delivery and pickup',
    label: 'GSS service',
    image: 'https://www.gssdumpsters.com/wp-content/uploads/2019/03/IMG_0464-Copy.jpg',
    alt: 'GSS roll-off truck and container ready for service',
    href: '/contact',
  },
]

export function ProjectGallery() {
  return <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-black uppercase tracking-[.18em] text-[#e77817]">A look at the work</p><h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Real containers. Real projects. Local service.</h2></div><p className="max-w-md text-sm leading-6 text-[#6c736d]">See how GSS roll-off rentals fit residential cleanups, job sites and larger projects.</p></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <Link key={`${project.href}-${index}`} href={project.href} className="group overflow-hidden rounded-2xl border border-black/10 bg-[#f7f6f2] transition hover:-translate-y-1 hover:shadow-xl"><div className="relative aspect-[4/3] overflow-hidden bg-[#e3e1d8]"><img src={project.image} alt={project.alt} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"/><span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#303530]">{project.label}</span></div><div className="flex items-center justify-between gap-3 p-5"><h3 className="text-lg font-black">{project.title}</h3><ArrowUpRight className="size-5 shrink-0 text-[#df761c] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div></Link>)}</div></div></section>
}
