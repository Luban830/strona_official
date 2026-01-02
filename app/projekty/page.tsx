'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

// Kategorie projektów związane z AI
const categories = [
  'Wszystkie',
  'AI Chatbot',
  'Automatyzacja',
  'Machine Learning',
  'Computer Vision',
  'NLP',
]

// Projekty z kategoriami i szczegółami
const projects = [
  {
    id: 1,
    client: "Hospitadent",
    title: "Hospitadent",
    category: "AI Chatbot",
    metric: "88+",
    metricLabel: "nowych rezerwacji pacjentów w miesiąc",
    description: "Automatyczne odpowiedzi 24/7 zwiększyły satysfakcję klientów i napędziły stały wzrost rezerwacji miesiąc do miesiąca.",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    ],
    details: "Implementacja zaawansowanego chatbota AI dla kliniki stomatologicznej, który automatycznie odpowiada na pytania pacjentów, umawia wizyty i przypomina o terminach. System wykorzystuje NLP do rozumienia intencji klientów i zapewnia 24/7 wsparcie.",
  },
  {
    id: 2,
    client: "TechCorp",
    title: "TechCorp",
    category: "Automatyzacja",
    metric: "250K+",
    metricLabel: "PLN zaoszczędzonych rocznie",
    description: "Automatyzacja procesów HR pozwoliła zredukować koszty operacyjne i przyspieszyć onboarding nowych pracowników.",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    ],
    details: "Kompleksowa automatyzacja procesów HR z wykorzystaniem AI do analizy CV, automatycznego planowania rozmów kwalifikacyjnych i onboardingu. System zmniejszył czas rekrutacji o 60% i zaoszczędził firmie ponad 250 tysięcy złotych rocznie.",
  },
  {
    id: 3,
    client: "E-Shop Pro",
    title: "E-Shop Pro",
    category: "AI Chatbot",
    metric: "95%",
    metricLabel: "redukcja czasu odpowiedzi",
    description: "Inteligentny chatbot obsługuje pytania klientów natychmiast, zwiększając konwersję i lojalność klientów.",
    images: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    ],
    details: "Chatbot AI dla e-commerce, który pomaga klientom w wyborze produktów, odpowiada na pytania o dostępność i parametry techniczne. System zintegrowany z bazą produktów i systemem płatności, obsługuje 95% zapytań bez interwencji człowieka.",
  },
  {
    id: 4,
    client: "Marketing Agency",
    title: "Marketing Agency",
    category: "Machine Learning",
    metric: "3x",
    metricLabel: "szybsze tworzenie treści",
    description: "AI generuje spersonalizowane treści marketingowe, które zwiększają zaangażowanie i konwersję.",
    images: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ],
    details: "System ML do generowania treści marketingowych wykorzystujący modele językowe do tworzenia spersonalizowanych postów, emaili i reklam. Algorytm uczy się z historii kampanii i optymalizuje treści pod kątem konwersji.",
  },
  {
    id: 5,
    client: "Legal Partners",
    title: "Legal Partners",
    category: "NLP",
    metric: "500+",
    metricLabel: "dokumentów przetworzonych dziennie",
    description: "OCR i AI automatycznie kategoryzują i analizują dokumenty prawne, oszczędzając godziny pracy prawników.",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    ],
    details: "System NLP do automatycznej analizy dokumentów prawnych wykorzystujący OCR i przetwarzanie języka naturalnego. System kategoryzuje dokumenty, wyciąga kluczowe informacje i przygotowuje podsumowania, przetwarzając ponad 500 dokumentów dziennie.",
  },
]

// Funkcja do mapowania kategorii na etykiety
const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    'AI Chatbot': 'AI CHATBOT',
    'Automatyzacja': 'AUTOMATYZACJA',
    'Machine Learning': 'MACHINE LEARNING',
    'Computer Vision': 'COMPUTER VISION',
    'NLP': 'NLP',
  }
  return labels[category] || category.toUpperCase()
}

export default function ProjektyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'Wszystkie'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  // Blokuj scroll na body gdy modal jest otwarty
  useEffect(() => {
    if (selectedProject) {
      // Zapisz aktualną pozycję scrolla
      const scrollY = window.scrollY
      // Zablokuj scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Przywróć scroll
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        const scrollPosition = parseInt(scrollY.replace('px', '').replace('-', ''))
        window.scrollTo(0, scrollPosition)
      }
    }

    // Cleanup przy unmount
    return () => {
      if (!selectedProject) {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
      }
    }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-[#0a0b0a] pt-20">
      <main className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tytuł w lewym górnym rogu */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 text-left">
            Case studies
            </h1>

          {/* Filtry */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#27F579] text-[#0a0b0a]'
                    : 'bg-[#111211] text-white border-2 border-white/20 hover:border-[#27F579]/50'
                }`}
                aria-label={`Filtruj projekty według kategorii ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid projektów */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectDetails(project)}
                className="bg-[#111211] rounded-2xl overflow-hidden border border-white/10 hover:border-[#27F579]/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-[#27F579]/10"
              >
                {/* Galeria screenshotów */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="flex h-full">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-full h-full relative"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Projekt automatyzacji AI - Zrzut ekranu ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tytuł projektu */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Etykieta kategorii */}
                  <div className="inline-block">
                    <span className="px-3 py-1.5 bg-[#27F579] text-[#0a0b0a] text-xs sm:text-sm font-semibold rounded-full">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Jeśli brak projektów w wybranej kategorii */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Brak projektów w kategorii "{selectedCategory}"
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modal ze szczegółami projektu */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeProjectDetails}
        >
          <div
            className="bg-[#111211] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#27F579]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modala */}
            <div className="sticky top-0 bg-[#111211] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeProjectDetails}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Zawartość modala */}
            <div className="p-6">
              {/* Metryki */}
              <div className="mb-6 p-6 bg-gradient-to-br from-[#0a2f1a] via-[#0d4025] to-[#0a2a16] rounded-xl border border-[#27F579]/20">
                <div className="text-[#27F579] text-sm font-semibold mb-2">
                  {selectedProject.category}
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {selectedProject.metric}
                </h3>
                <p className="text-xl font-bold text-white/90 mb-4">
                  {selectedProject.metricLabel}
                </p>
                <p className="text-white/70">
                  {selectedProject.description}
                </p>
              </div>

              {/* Szczegóły */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-3">Szczegóły projektu</h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              {/* Galeria screenshotów */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-4">Screenshoty</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10"
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} - Projekt automatyzacji AI - Zrzut ekranu rozwiązania ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Przycisk CTA */}
              <div className="flex justify-center">
                <a
                  href="/umow-spotkanie"
                  className="inline-block rounded-full bg-gradient-to-r from-[#27F579] via-[#27F579] to-[#1a7a4a] px-8 py-4 text-[#0a0b0a] font-semibold text-lg shadow-lg shadow-[#27F579]/25 hover:shadow-xl hover:shadow-[#27F579]/30 transition-all duration-300 hover:scale-105"
                >
                  Umów spotkanie
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
