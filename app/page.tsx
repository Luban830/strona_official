import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import VideoSection from '@/components/VideoSection'
import Footer from '@/components/Footer'
import HashScrollHandler from '@/components/HashScrollHandler'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Hero />
      <StatsSection />
      <VideoSection />
      <Services />
      <CaseStudies />
      <Footer />
    </main>
  )
}
