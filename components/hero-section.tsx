"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface HeroSectionProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}


export default function HeroSection({ searchTerm, onSearchChange }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-12 sm:py-16 px-4">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Integration Marketplace
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
          Discover all the channels and connect to them right away. Extend your platform with powerful integrations.
        </p>
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 py-3 sm:py-4 text-base sm:text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full text-gray-900 placeholder:text-gray-500 w-full"
            />
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-700 via-blue-500 to-transparent z-0" />
    </div>
  )
}
