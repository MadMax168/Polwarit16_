import { NavBar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="bg-[#0A0F1A] text-white min-h-screen font-mono overflow-hidden">
      {/* BG Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />

      {/* HEADER(Nav-Bar) */}
      <section>
        <NavBar />
      </section>

      {/* Information */}
      <section>
        
      </section>

      {/* PROJECTS */}
      <section>
      
      </section>

      {/* EMAIL */}
      <section>
        
      </section>
    </main>
  )
}
