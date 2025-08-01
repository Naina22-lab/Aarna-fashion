"use client"

import { useAppSelector } from "@/lib/hooks"
import ProductCard from "./ProductCard"

export default function FeaturedSection() {
  const products = useAppSelector((state) => state.products.products)

  // Get featured products from different categories
  const featuredProducts = [
    products.find((p) => p.category === "M1"),
    products.find((p) => p.category === "M2"),
    products.find((p) => p.category === "M3"),
  ].filter(Boolean)

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">FEATURED COLLECTIONS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Handpicked selections from our premium collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
