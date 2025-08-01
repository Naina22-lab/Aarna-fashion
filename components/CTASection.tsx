"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

export default function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA 1 */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Fashion Community</h3>
            <p className="text-pink-100 mb-6">
              Get exclusive access to new collections, special offers, and styling tips
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center space-x-2">
              <span>Explore Collections</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* CTA 2 - Newsletter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              Stay Updated
            </h3>
            <p className="text-pink-100 mb-6">
              Subscribe to our newsletter for the latest fashion trends and exclusive offers
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
              <button
                type="submit"
                className="bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
