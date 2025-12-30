'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { NoiseBackground } from '@/components/ui/noise-background'
import MagicBento from './MagicBento'

// Komponent z animowanym przechodzeniem przez kroki z suwakiem
function AnimatedStepsBox({
  title,
  steps,
  onOpenModal,
}: {
  title: string
  steps: Array<{ step: number; label: string }>
  onOpenModal: () => void
}) {
  const [activeStep, setActiveStep] = useState(0)
  const stepsCount = steps.length
  const duration = 2000

  useEffect(() => {
    let startTime = performance.now()
    let animationFrameId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const cycleDuration = stepsCount * duration
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration
      const segmentProgress = cycleProgress * stepsCount
      const currentSegment = Math.floor(segmentProgress) % stepsCount
      const segmentPosition = segmentProgress % 1

      let newActiveStep: number
      if (segmentPosition < 0.3) {
        newActiveStep = currentSegment
      } else if (segmentPosition > 0.7) {
        newActiveStep = (currentSegment + 1) % stepsCount
      } else {
        const normalizedProgress = (segmentPosition - 0.3) / 0.4
        const easedProgress = normalizedProgress < 0.5
          ? 4 * normalizedProgress * normalizedProgress * normalizedProgress
          : 1 - Math.pow(-2 * normalizedProgress + 2, 3) / 2
        newActiveStep = Math.round(currentSegment + ((currentSegment + 1) % stepsCount - currentSegment) * easedProgress)
      }

      const clampedStep = Math.max(0, Math.min(stepsCount - 1, newActiveStep))

      if (clampedStep !== activeStep) {
        setActiveStep(clampedStep)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [stepsCount, activeStep, duration])

  return (
    <div className="bg-[#111211] border border-white/10 rounded-2xl p-8">
      <h4 className="text-2xl font-bold text-[#27F579] mb-8">{title}</h4>
      <div className="space-y-6">
        {steps.map((item, index, array) => {
          const isActive = index === activeStep
          const isCompleted = index < activeStep

          return (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                    isActive
                      ? 'bg-[#27F579] text-[#0a0b0a] shadow-[0_0_20px_rgba(39,245,121,0.8)] scale-110'
                      : isCompleted
                        ? 'bg-[#27F579] text-[#0a0b0a]'
                        : 'bg-[#1a7a4a] text-white'
                  }`}
                >
                  {item.step}
                </div>
                {index < array.length - 1 && (
                  <div
                    className={`w-0.5 flex-1 mt-2 transition-all duration-500 ${
                      isCompleted || isActive ? 'bg-[#27F579]' : 'bg-[#1a7a4a]'
                    }`}
                    style={{ minHeight: '40px' }}
                  />
                )}
              </div>
              <div className="flex-1 pt-2">
                <p
                  className={`text-lg font-medium transition-all duration-500 ${
                    isActive ? 'text-[#27F579]' : isCompleted ? 'text-[#27F579]' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <NoiseBackground
          containerClassName="w-fit"
          gradientColors={['rgb(39, 245, 121)', 'rgb(26, 122, 74)', 'rgb(39, 245, 121)']}
        >
          <button
            onClick={onOpenModal}
            className="cursor-pointer rounded-full bg-gradient-to-r from-[#27F579] via-[#27F579] to-[#1a7a4a] px-6 py-3 text-[#0a0b0a] font-semibold shadow-[0px_2px_0px_0px_rgba(39,245,121,0.3)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.3)] transition-all duration-200 active:scale-95 hover:scale-110 hover:brightness-110 hover:shadow-[0px_2px_0px_0px_rgba(39,245,121,0.5)_inset,0px_4px_16px_0px_rgba(39,245,121,0.5)]"
          >
            Szczegóły &rarr;
          </button>
        </NoiseBackground>
      </div>
    </div>
  )
}

const longTermDetails = [
  'Indywidualne podejście do Twojego biznesu',
  'Ciągłe wsparcie i optymalizacja rozwiązań',
  'Regularne przeglądy i raporty postępów',
  'Elastyczne dostosowanie do zmieniających się potrzeb',
  'Długoterminowa relacja partnerska',
]

const oneTimeDetails = [
  'Szybka realizacja projektu',
  'Kompletna dokumentacja dostarczona wraz z produktem',
  'Jednorazowa inwestycja bez dodatkowych opłat',
  'Wsparcie wdrożeniowe po dostarczeniu',
  'Gotowe rozwiązanie do natychmiastowego użycia',
]

export default function Services() {
  const [openModal, setOpenModal] = useState<'long-term' | 'one-time' | null>(null)

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [openModal])

  return (
    <section id="uslugi" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0a]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#27F579] uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Usługi
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Twój Zaufany Partner<br />
            <span className="text-[#27F579]">w Transformacji AI</span>
          </h2>
        </div>

        {/* Magic Bento Cards */}
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="39, 245, 121"
        />

        {/* Ways of collaboration */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Działamy na dwa sposoby
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Wybierz formę współpracy, która najlepiej odpowiada Twoim potrzebom
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-0 mt-12">
            <div className="flex-1">
              <AnimatedStepsBox
                title="Współpraca długoterminowa"
                steps={[
                  { step: 1, label: 'Konsultacja' },
                  { step: 2, label: 'Analiza potrzeb' },
                  { step: 3, label: 'Wdrożenie' },
                  { step: 4, label: 'Wsparcie i optymalizacja' },
                ]}
                onOpenModal={() => setOpenModal('long-term')}
              />
            </div>

            {/* Divider - horizontal on mobile, vertical on desktop */}
            <div className="flex items-center justify-center py-8 md:py-0 md:px-8">
              <div className="w-full h-px md:w-px md:h-full min-h-0 md:min-h-[500px] bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#27F579]/40 to-transparent"></div>
            </div>

            <div className="flex-1">
              <AnimatedStepsBox
                title="Dostarczanie jednorazowego produktu"
                steps={[
                  { step: 1, label: 'Brief' },
                  { step: 2, label: 'Projektowanie' },
                  { step: 3, label: 'Realizacja' },
                  { step: 4, label: 'Dostarczenie' },
                ]}
                onOpenModal={() => setOpenModal('one-time')}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenModal(null)}
          >
            <div
              className="bg-[#111211] border border-white/10 rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-[#27F579]">
                  {openModal === 'long-term' ? 'Współpraca długoterminowa' : 'Dostarczanie jednorazowego produktu'}
                </h3>
                <button
                  onClick={() => setOpenModal(null)}
                  className="text-gray-400 hover:text-[#27F579] transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  {(openModal === 'long-term' ? longTermDetails : oneTimeDetails).map((detail, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#27F579]/20 border border-[#27F579]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#27F579]" />
                      </div>
                      <p className="text-gray-300 text-lg">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="relative flex justify-center items-center">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/1.jpg"
                      alt="Współpraca"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
