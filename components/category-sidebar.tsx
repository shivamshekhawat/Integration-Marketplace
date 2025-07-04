"use client"

import { Filter, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Category, CategoryId } from "../types/integration"

interface CategorySidebarProps {
  categories: Category[]
  selectedCategory: CategoryId
  onCategoryChange: (categoryId: CategoryId) => void
}

export default function CategorySidebar({ categories, selectedCategory, onCategoryChange }: CategorySidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          onClick={() => setIsMobileMenuOpen(true)}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filter Categories
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        lg:w-80 flex-shrink-0
        ${
          isMobileMenuOpen
            ? "fixed top-0 left-0 h-full w-80 max-w-[80vw] z-50 lg:relative lg:top-auto lg:left-auto lg:h-auto lg:w-80"
            : "hidden lg:block"
        }
      `}
      >
        <div className="bg-white rounded-none lg:rounded-xl shadow-lg lg:shadow-sm border-0 lg:border border-gray-200 p-6 h-full lg:h-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          </div>

          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id as CategoryId)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
