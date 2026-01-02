export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lunolab",
    "url": "https://lunolab.pl",
    "logo": "https://lunolab.pl/logo_lunolab.png",
    "description": "Zaawansowane automatyzacje procesów biznesowych z wykorzystaniem sztucznej inteligencji dla firm",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "kontakt@lunolab.pl",
      "contactType": "customer service",
      "availableLanguage": ["Polish"]
    },
    "sameAs": [
      "https://www.youtube.com/@LunoLab_AI",
      "https://www.skool.com/automatyzacjaai-polskalunolab-2698",
      "https://www.tiktok.com/@lunolab",
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lunolab",
    "url": "https://lunolab.pl",
    "description": "Automatyzacje procesów w AI dla firm",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lunolab.pl/projekty?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Automatyzacja procesów biznesowych z wykorzystaniem AI",
    "provider": {
      "@type": "Organization",
      "name": "Lunolab"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi automatyzacji AI",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatyzacja procesów biznesowych",
            "description": "Automatyzujemy powtarzalne zadania i procesy w Twojej firmie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Współpraca długoterminowa",
            "description": "Kompleksowa współpraca obejmująca konsultację, analizę, wdrożenie i wsparcie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dostarczanie jednorazowego produktu",
            "description": "Gotowe rozwiązania automatyzacyjne dostosowane do potrzeb klienta"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

