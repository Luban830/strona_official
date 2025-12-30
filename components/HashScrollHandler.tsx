'use client'

import { useEffect } from 'react'

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash scroll on page load
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        // Wait a bit for page to render
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offset = 80 // Navbar height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    handleHashScroll()
  }, [])

  return null
}

