"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setCategory } from "@/lib/store"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItems = useAppSelector((state) => state.cart.items)
  const currentCategory = useAppSelector((state) => state.products.currentCategory)
  const dispatch = useAppDispatch()

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category))
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="text-center flex-1">
            <span className="font-medium">🎉 Special Offer: Up to 50% OFF on Festive Collection!</span>
          </div>
          <div className="hidden md:block">
            <span>Contact: +91 1234567890</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Aarna Fashions" width={150} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["M1", "M2", "M3"].map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryClick(item)}
                className={`text-gray-700 hover:text-pink-600 font-medium transition-colors ${
                  currentCategory === item ? "text-pink-600 border-b-2 border-pink-600" : ""
                }`}
              >
                {item === "M1" ? "Bridal Wear" : item === "M2" ? "Festive Collection" : "Casual Wear"}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {["M1", "M2", "M3"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                  className={`text-left text-gray-700 hover:text-pink-600 font-medium transition-colors ${
                    currentCategory === item ? "text-pink-600" : ""
                  }`}
                >
                  {item === "M1" ? "Bridal Wear" : item === "M2" ? "Festive Collection" : "Casual Wear"}
                </button>
              ))}
              <div className="pt-2 text-sm text-gray-600">Contact: +91 1234567890</div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
