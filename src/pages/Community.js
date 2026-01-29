import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/auth/Navbar';
export default function Community() {
  const [openFilter, setOpenFilter] = useState(null)
  const [selected, setSelected] = useState({
    Category: 'Category',
    Activity: 'Activity',
    Location: 'Location',
    Language: 'Language',
  })
  const filterOptions = {
    Category: ['Tech', 'Art & Design', 'Business', 'Health & Wellness', 'Education'],
    Activity: ['Events', 'Workshops', 'Mentorship', 'Volunteering'],
    Location: ['Lagos', 'Nairobi', 'Accra', 'Remote'],
    Language: ['English', 'French', 'Arabic', 'Swahili'],
  }
  const filtersRef = useRef(null)
  useEffect(() => {
    const onDocClick = (e) => {
      if (filtersRef.current && !filtersRef.current.contains(e.target)) setOpenFilter(null)
    }
    const onEsc = (e) => { if (e.key === 'Escape') setOpenFilter(null) }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])
  const cards = [
    {
      title: 'Tech Innovators',
      desc: 'A community for tech enthusiasts and innovators.',
      members: '1.2k members',
      cta: 'Join',
      variant: 'primary',
    },
    {
      title: 'Creative Minds',
      desc: 'A space for creative thinkers and artists',
      members: '875 members',
      cta: 'Join',
      variant: 'primary',
    },
    {
      title: 'Environmental Advocates',
      desc: 'A group dedicated to environmental sustainability.',
      members: '2.1k members',
      cta: 'Request to Join',
      variant: 'secondary',
    },
    {
      title: 'Education Pioneers',
      desc: 'A community for educators and learners.',
      members: '998 members',
      cta: 'Request to Join',
      variant: 'secondary',
    },
    {
      title: 'Health & Wellness Group',
      desc: 'A community focused on health and wellness.',
      members: '3.5k members',
      cta: 'Join',
      variant: 'primary',
    },
    {
      title: 'Social Impact Leaders',
      desc: 'A network for leaders driving social change.',
      members: '540 members',
      cta: 'Join',
      variant: 'primary',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F7FA] text-[#0F0122]">
      {/* Top bar */}
      <NavBar />

      <main className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <section className="text-center pt-10 sm:pt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">Discover Communities</h1>
          <p className="mt-2 text-sm sm:text-base text-black/60">Find your Tribe, connect with peers, and grow Together.</p>
        </section>

        {/* Search */}
        <section className="mt-6 sm:mt-8 flex justify-center">
          <div className="relative w-full max-w-3xl">
            <span className="absolute inset-y-0 left-3 flex items-center text-black/40">
              <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.71.71l.27.28v.79l5 5 1.5-1.5-5-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" fill="currentColor"/></svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-black/10 bg-white pl-10 pr-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[var(--af-purple)]"
            />
          </div>
        </section>

        {/* Filters */}
        <section ref={filtersRef} className="mt-4 sm:mt-6 flex flex-wrap gap-3 items-center justify-start">
          <button className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(106,0,177,0.2)] bg-white px-3 py-2 text-sm font-semibold text-[color:var(--af-purple)] hover:bg-[color:rgba(106,0,177,0.06)]">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6A30FF]"><path d="M3 6h18l-7 8v5l-4-2v-3L3 6Z" fill="currentColor"/></svg>
            Filters
          </button>
          {Object.keys(selected).map((label) => (
            <div key={label} className="relative">
              <button
                onClick={() => setOpenFilter((prev) => (prev === label ? null : label))}
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[color:rgba(106,0,177,0.08)] text-[color:var(--af-purple)] px-3 py-2 text-sm font-semibold hover:bg-[color:rgba(106,0,177,0.14)]"
              >
                {selected[label]}
                <svg viewBox="0 0 24 24" className={`w-4 h-4 transition-transform ${openFilter === label ? 'rotate-180' : ''}`}><path d="M7 10l5 5 5-5H7z" fill="#6A30FF"/></svg>
              </button>
              {openFilter === label && (
                <div className="absolute z-20 mt-2 w-44 rounded-xl border border-black/10 bg-white shadow-lg overflow-hidden">
                  {filterOptions[label].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelected((s) => ({ ...s, [label]: opt }))
                        setOpenFilter(null)
                      }}
                      className="block w-full px-3 py-2 text-left text-sm hover:bg-[color:rgba(106,0,177,0.08)] hover:text-[color:var(--af-purple)]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Cards */}
        {/* Cards */}
      <section className="mt-6 sm:mt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <article key={idx} className="rounded-2xl border border-black/10 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="h-32 rounded-xl bg-black/5" />
            <div className="mt-4">
              <h3 className="text-sm font-bold">{c.title}</h3>
              <p className="mt-1 text-xs text-black/60 leading-relaxed">{c.desc}</p>
              <p className="mt-1 text-[11px] text-black/50">{c.members}</p>
            </div>
            <div className="mt-4">
              {c.cta === 'Join' ? (
                <button className="w-full py-2 text-sm font-extrabold rounded-xl bg-[#6A00B1] text-white">
                  {c.cta}
                </button>
              ) : (
                <button className="w-full py-2 text-sm font-extrabold rounded-xl bg-[color:rgba(106,0,177,0.08)] text-[color:var(--af-purple)]">
                  {c.cta}
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      </main>
    </div>
  )
}


