import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'

export const metadata: Metadata = {
  title: "Umów spotkanie - Darmowa konsultacja automatyzacji AI",
  description: "Umów się na darmową konsultację i dowiedz się, jak możemy zautomatyzować procesy w Twojej firmie z wykorzystaniem sztucznej inteligencji.",
  openGraph: {
    title: "Umów spotkanie - Darmowa konsultacja | Lunolab",
    description: "Umów się na darmową konsultację automatyzacji procesów biznesowych z AI.",
    url: "https://lunolab.pl/umow-spotkanie",
  },
  alternates: {
    canonical: "https://lunolab.pl/umow-spotkanie",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UmowSpotkanieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbList
        items={[
          { name: "Strona główna", url: "https://lunolab.pl" },
          { name: "Umów spotkanie", url: "https://lunolab.pl/umow-spotkanie" },
        ]}
      />
      {children}
    </>
  )
}

