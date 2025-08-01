"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    id: 1,
    image: "/images/hero/bridal-collection.jpeg",
    title: "Bridal Collection",
    subtitle: "Make your special day unforgettable with our exquisite bridal wear",
  },
  {
    id: 2,
    image: "/images/hero/traditional.jpeg",
    title: "Traditional Elegance",
    subtitle: "Celebrate traditions with our stunning ethnic collection",
  },
  {
    id: 3,
    image: "/images/hero/festive.jpeg",
    title: "Festive Specials",
    subtitle: "Embrace the festivities with our premium festive wear",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImages[currentSlide].image || "/placeholder.svg"}
                alt={heroImages[currentSlide].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{heroImages[currentSlide].title}</h2>
                <p className="text-lg opacity-90">{heroImages[currentSlide].subtitle}</p>
                <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Shop Now
                </button>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-pink-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/hero/jewelry.jpeg"
                alt="Traditional Jewelry Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Jewelry Collection</h3>
                <p className="text-sm opacity-90">Exquisite traditional designs</p>
              </div>
            </div>

            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/hero/accessories.jpeg"
                alt="Fashion Accessories"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Accessories</h3>
                <p className="text-sm opacity-90">Complete your look</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
