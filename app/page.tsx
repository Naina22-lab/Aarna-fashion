import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TrendingSection from "@/components/TrendingSection"
import FeaturedSection from "@/components/FeaturedSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrendingSection />
      <FeaturedSection />
      <CTASection />
      <Footer />
    </main>
  )
}
