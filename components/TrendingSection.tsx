"use client"

import { useAppSelector } from "@/lib/hooks"
import ProductCard from "./ProductCard"

export default function TrendingSection() {
  const products = useAppSelector((state) => state.products.products)
  const currentCategory = useAppSelector((state) => state.products.currentCategory)

  const filteredProducts = products.filter((product) => product.category === currentCategory)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">TRENDING NOW</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends in traditional and contemporary fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
