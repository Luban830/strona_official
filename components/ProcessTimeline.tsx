'use client'

import { useState } from 'react'

const longTermSteps = [
  {
    step: 1,
    title: 'Konsultacja',
    description: 'Rozmawiamy o Twoich potrzebach, celach biznesowych i wyzwaniach. Analizujemy obecne procesy i identyfikujemy możliwości automatyzacji.',
  },
  {
    step: 2,
    title: 'Analiza potrzeb',
    description: 'Przeprowadzamy dogłębną analizę Twojej firmy, definiujemy ścieżkę wdrożenia AI i przygotowujemy szczegółowy plan działania.',
  },
  {
    step: 3,
    title: 'Wdrożenie',
    description: 'Implementujemy rozwiązania AI dostosowane do Twoich potrzeb. Tworzymy i wdrażamy systemy automatyzacji procesów biznesowych.',
  },
  {
    step: 4,
    title: 'Wsparcie i optymalizacja',
    description: 'Zapewniamy ciągłe wsparcie techniczne, monitorujemy wydajność systemów i optymalizujemy rozwiązania w miarę rozwoju Twojej firmy.',
  },
]

const oneTimeSteps = [
  {
    step: 1,
    title: 'Brief',
    description: 'Zbieramy wszystkie informacje o projekcie, określamy wymagania, zakres prac i oczekiwane rezultaty. Ustalamy szczegóły techniczne.',
  },
  {
    step: 2,
    title: 'Projektowanie',
    description: 'Tworzymy szczegółowy projekt rozwiązania, przygotowujemy architekturę systemu i planujemy implementację zgodnie z Twoimi potrzebami.',
  },
  {
    step: 3,
    title: 'Realizacja',
    description: 'Programujemy i wdrażamy rozwiązanie zgodnie z projektem. Tworzymy w pełni funkcjonalny produkt gotowy do użycia.',
  },
  {
    step: 4,
    title: 'Dostarczenie',
    description: 'Przekazujemy gotowe rozwiązanie wraz z kompletną dokumentacją. Zapewniamy wsparcie wdrożeniowe i szkolenia z obsługi.',
  },
]

function Timeline({ steps, title }: { steps: typeof longTermSteps; title: string }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#27F579] via-[#27F579] to-[#27F579]/50"></div>

      {/* Timeline steps */}
      <div className="space-y-12 sm:space-y-16">
        {steps.map((stepItem, index) => (
          <div key={index} className="relative pl-16 sm:pl-24">
            {/* Step indicator and dot */}
            <div className="absolute left-0 top-0 flex items-center">
              <div className="relative">
                {/* Green dot */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#27F579] border-4 border-[#0a0b0a] z-10"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#27F579] opacity-50 blur-md"></div>
              </div>
            </div>

            {/* Step number label */}
            <div className="absolute left-8 sm:left-12 top-0 -translate-y-1/2">
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#27F579] via-[#20c46a] to-[#1a7a4a] bg-clip-text text-transparent">
                {stepItem.step}
              </span>
            </div>

            {/* Content */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                {stepItem.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProcessTimeline() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0a] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Działamy na dwa sposoby
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Wybierz formę współpracy, która najlepiej odpowiada Twoim potrzebom
          </p>
        </div>

        {/* Two Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          {/* Long-term collaboration */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center lg:text-left">
              Współpraca długoterminowa
            </h3>
            <Timeline steps={longTermSteps} title="Współpraca długoterminowa" />
          </div>

          {/* One-time product */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center lg:text-left">
              Dostarczanie jednorazowego produktu
            </h3>
            <Timeline steps={oneTimeSteps} title="Dostarczanie jednorazowego produktu" />
          </div>
        </div>
      </div>
    </section>
  )
}

