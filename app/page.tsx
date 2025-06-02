import { NavBar } from "@/components/navbar"
import PixelText from "@/components/pixeltext"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="bg-[#0A0F1A] text-white min-h-screen font-mono overflow-hidden">
      {/* BG Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />

      {/* HEADER(Nav-Bar) */}
      <section className="flex flex-col h-screen">
        <NavBar />
        <div className="grid grid-cols-2 grid-rows-2 h-screen">
          {/* Lanyard */}
          <div className="row-span-full">
            
          </div>
          {/* Info */}
          <div className="row-span-full space-y-5">
            <div className="flex items-center justify-center">
              <PixelText />
            </div>
            <div className="flex justify-center h-110">
              <Card className="w-3xl bg-white/5 border-white/10">

              </Card>
            </div>
          </div>
          {/* Name */}
          <div className="col-span-full pl-5">
            <div className="text-[175px] font-bold  bg-gradient-to-r from-blue-400 to-yellow-100 bg-clip-text text-transparent animate-pulse">Polwarit W.</div>
          </div>
        </div>
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
