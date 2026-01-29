import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import vector1Img from '../Assets/img/Vector (1).png'
import NavBar from '../components/auth/Navbar';

export default function Discover() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-white text-[#0F0122]">
      {/* Top bar */}
      <NavBar />
      
      <main className="max-w-5xl mx-auto px-4">
        {/* Center hero */}
        <section className="text-center pt-24 sm:pt-28">
          <button
            type="button"
            aria-label="Discover icon"
            title="Discover"
            className="mx-auto grid place-items-center w-16 h-16 rounded-2xl focus-ring-primary"
          >
            <img src={vector1Img} alt="" className="w-16 h-16 object-contain af-icon" />
          </button>
          <h1 className="mt-6 text-2xl sm:text-3xl font-black text-[#6A00B1]">Discover Your Path</h1>
          <p className="mt-2 text-sm sm:text-base text-black/60">Hi there! I’m your AI Growth Companion</p>
          <p className="text-sm sm:text-base text-black/50">Let’s explore your goals and interests together to find the perfect opportunities for you.</p>
        </section>

        {/* Prompt input */}
        <section className="mt-8 sm:mt-10 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={4}
              placeholder="Tell me about your passion, skills, and what you’re looking for..."
              className="w-full rounded-2xl border border-black/10 bg-white placeholder-black/35 px-5 py-4 pr-16 text-sm sm:text-base outline-none focus:ring-2"
              style={{
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                transition: 'box-shadow .2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,103,255,0.12)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
              }}
            />
            <button
              type="button"
              onClick={() => {
                if (query.trim()) sessionStorage.setItem('discoverQuery', query.trim());
                navigate('/opportunity');
              }}
              className="absolute right-3 bottom-3 rounded-full text-white grid place-items-center transition-transform duration-200 hover:scale-105 active:scale-95 group"
              style={{
                width: 44,
                height: 44,
                background: 'linear-gradient(135deg, rgba(150,50,225,0.95) 0%, rgba(124,30,200,0.98) 45%, var(--af-purple) 100%)'
              }}
              aria-label="Go"
            >
              {/* Simple right arrow */}
              <svg viewBox="0 0 24 24" className="w-9 h-9 transform transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                <path d="M6.5 12h11" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 7.5l5.5 4.5-5.5 4.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}


