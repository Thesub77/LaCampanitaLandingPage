import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MissionVisionSection from "@/components/mission-vision-section"
import ValuesSection from "@/components/values-section"
import ProductionProcessSection from "@/components/production-process-section"
import VideoSection from "@/components/video-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <ProductionProcessSection />
      <VideoSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
