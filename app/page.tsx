import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import VideoSection from '@/components/VideoSection'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import HashScrollHandler from '@/components/HashScrollHandler'
import SectionDivider from '@/components/SectionDivider'
import ProcessTimeline from '@/components/ProcessTimeline'
import OurApproach from '@/components/OurApproach'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Hero />
      <SectionDivider />
      <StatsSection />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <ProcessTimeline />
      <SectionDivider />
      <OurApproach />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <SocialSection />
      <Footer />
    </main>
  )
}
