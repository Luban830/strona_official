import type { Metadata } from 'next'
import BreadcrumbList from '@/components/BreadcrumbList'

export const metadata: Metadata = {
  title: "Projekty - Portfolio automatyzacji AI",
  description: "Zobacz nasze zrealizowane projekty automatyzacji procesów biznesowych z wykorzystaniem sztucznej inteligencji. Case studies i przykłady wdrożeń AI dla firm.",
  openGraph: {
    title: "Projekty - Portfolio automatyzacji AI | Lunolab",
    description: "Zobacz nasze zrealizowane projekty automatyzacji procesów biznesowych z wykorzystaniem AI.",
    url: "https://lunolab.pl/projekty",
  },
  alternates: {
    canonical: "https://lunolab.pl/projekty",
  },
}

export default function ProjektyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbList
        items={[
          { name: "Strona główna", url: "https://lunolab.pl" },
          { name: "Projekty", url: "https://lunolab.pl/projekty" },
        ]}
      />
      {children}
    </>
  )
}

