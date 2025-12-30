'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MoonAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) based on viewport height
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      // Full glow at 1 viewport height scroll
      const progress = Math.min(scrollY / (viewportHeight * 0.8), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate glow intensity based on scroll
  const glowIntensity = scrollProgress
  const glowOpacity = 0.1 + scrollProgress * 0.6 // 0.1 to 0.7
  const shadowBlur = 20 + scrollProgress * 60 // 20px to 80px

  return (
    <div className="relative w-[320px] sm:w-[450px] h-[320px] sm:h-[450px]">
      
      {/* Crescent Moon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Outer glow - intensifies with scroll */}
        <div 
          className="absolute -inset-16 rounded-full transition-all duration-300"
          style={{
            background: `radial-gradient(circle, rgba(39, 245, 121, ${glowOpacity}) 0%, rgba(39, 245, 121, ${glowOpacity * 0.5}) 30%, transparent 70%)`,
            filter: `blur(${shadowBlur}px)`,
          }}
        />
        
        {/* Secondary glow ring */}
        <div 
          className="absolute -inset-8 rounded-full transition-all duration-300"
          style={{
            boxShadow: `0 0 ${shadowBlur * 1.5}px ${shadowBlur * 0.5}px rgba(39, 245, 121, ${glowOpacity * 0.8})`,
          }}
        />
        
        {/* Crescent Moon Shape */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52">
          {/* Main moon circle */}
          <div 
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, 
                rgba(39, 245, 121, ${0.05 + glowIntensity * 0.15}) 0%, 
                rgba(39, 245, 121, ${0.1 + glowIntensity * 0.25}) 50%, 
                rgba(39, 245, 121, ${0.2 + glowIntensity * 0.4}) 100%)`,
              boxShadow: `
                inset -20px -20px 40px rgba(0, 0, 0, 0.3),
                inset 10px 10px 30px rgba(39, 245, 121, ${glowIntensity * 0.3}),
                0 0 ${shadowBlur}px rgba(39, 245, 121, ${glowOpacity})
              `,
              border: `2px solid rgba(39, 245, 121, ${0.2 + glowIntensity * 0.5})`,
            }}
          />
          
          {/* Crescent shadow (creates the crescent effect) */}
          <div 
            className="absolute rounded-full transition-all duration-500"
            style={{
              top: '-15%',
              left: '25%',
              width: '90%',
              height: '90%',
              background: '#0a0b0a',
              boxShadow: `
                -10px 10px 30px rgba(0, 0, 0, 0.8),
                inset 5px -5px 20px rgba(39, 245, 121, ${glowIntensity * 0.1})
              `,
            }}
          />
          
          {/* Neon edge glow */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 200"
          >
            <defs>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation={4 + glowIntensity * 8} result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 100 10 
                 A 90 90 0 1 1 100 190 
                 A 70 70 0 1 0 100 10"
              fill="none"
              stroke={`rgba(39, 245, 121, ${0.3 + glowIntensity * 0.7})`}
              strokeWidth={2 + glowIntensity * 2}
              filter="url(#neonGlow)"
              className="transition-all duration-300"
            />
          </svg>
          
          {/* Logo in center of visible crescent */}
          <div 
            className="absolute flex items-center justify-center transition-all duration-300"
            style={{
              bottom: '15%',
              left: '5%',
              width: '50%',
              height: '50%',
            }}
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/moon_logo.png"
                alt="Lunolab Logo"
                fill
                className="object-contain transition-all duration-300"
                style={{
                  filter: `drop-shadow(0 0 ${10 + glowIntensity * 25}px rgba(39, 245, 121, ${0.4 + glowIntensity * 0.5}))`
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge - AI Ready */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 sm:left-0 top-8 sm:top-12 bg-[#1e1f1e] rounded-2xl p-3 sm:p-4 shadow-xl border border-white/10 z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#27F579]/20 flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#27F579]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-xs sm:text-sm">AI Powered</div>
            <div className="text-gray-500 text-[10px] sm:text-xs">Automatyzacja</div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge - Stats */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 sm:right-0 bottom-12 sm:bottom-16 bg-[#27F579] rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#27F579]/30 z-10"
      >
        <div className="text-[#0a0b0a] font-bold text-xl sm:text-2xl">250K+</div>
        <div className="text-[#0a0b0a]/70 text-[10px] sm:text-xs">PLN oszczędności</div>
      </motion.div>

      {/* Floating badge - Time saved */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 sm:right-4 top-16 sm:top-20 bg-[#0a0b0a] rounded-xl p-2 sm:p-3 border border-[#27F579]/30 z-10"
      >
        <div className="text-[#27F579] font-bold text-lg sm:text-xl text-center">+500h</div>
        <div className="text-gray-400 text-[8px] sm:text-[10px] text-center">oszczędności/mies.</div>
      </motion.div>
    </div>
  )
}
