'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0a0b0a]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27F57910_1px,transparent_1px),linear-gradient(to_bottom,#27F57910_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      
      {/* Green gradient blob */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#27F579]/15 via-[#27F579]/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#0a0b0a] to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#27F579] to-[#1a7a4a] flex items-center justify-center text-[#151716] text-xs font-bold">L</div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#27F579]" />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#27F579]/20 flex items-center justify-center text-[#27F579] text-xs font-bold border border-[#27F579]/30">AI</div>
              </div>
              <span className="text-gray-400 text-sm font-medium">
                <span className="font-bold text-white">Nowa era</span> automatyzacji biznesu
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                Automatyzacja
                <br />
                <span className="bg-gradient-to-r from-[#27F579] via-[#20c46a] to-[#1a7a4a] bg-clip-text text-transparent">
                  z AI dla Firm
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg border-l-4 border-[#27F579]/40 pl-4">
              Odblokuj potencjał swojej firmy. Kompleksowe rozwiązania AI stworzone z myślą o nowoczesnych przedsiębiorstwach.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/umow-spotkanie">
                <button className="group flex items-center gap-3 bg-gradient-to-r from-[#27F579] to-[#20c46a] text-[#151716] font-semibold px-7 py-4 rounded-full shadow-lg shadow-[#27F579]/25 hover:shadow-xl hover:shadow-[#27F579]/30 transition-all duration-300 hover:scale-105">
                  Darmowa konsultacja
                  <span className="w-8 h-8 bg-[#0a0b0a]/20 rounded-full flex items-center justify-center group-hover:bg-[#0a0b0a]/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              </Link>
              
              <Link href="#case-studies">
                <button className="group flex items-center gap-3 bg-white/5 text-white font-semibold px-7 py-4 rounded-full border border-white/20 hover:border-[#27F579]/50 hover:bg-[#27F579]/10 transition-all duration-300">
                  Zobacz projekty
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Czas wdrożenia</div>
                <div className="text-xl font-bold text-white">2-4 tygodnie</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Oszczędności</div>
                <div className="text-xl font-bold text-white">Do 80%</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Wsparcie</div>
                <div className="text-xl font-bold text-white">24/7</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <Image
                src="/1.jpg"
                alt="Lunolab AI Automation"
                fill
                className="object-contain"
              />
              {/* Green gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#27F579]/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0b0a]/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
