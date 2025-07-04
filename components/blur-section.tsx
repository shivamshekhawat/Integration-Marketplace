"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlurSectionProps {
  children: React.ReactNode
  className?: string
}

export default function BlurSection({ children, className = "" }: BlurSectionProps) {
  const [isBlurred, setIsBlurred] = useState(true)

  return (
    <div className={`relative ${className}`}>
      <div className={`transition-all duration-500 ${isBlurred ? "blur-md" : "blur-none"}`}>{children}</div>

      {/* Blur Toggle Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          onClick={() => setIsBlurred(!isBlurred)}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          {isBlurred ? (
            <>
              <Eye className="w-4 h-4 mr-2" />
              Show
            </>
          ) : (
            <>
              <EyeOff className="w-4 h-4 mr-2" />
              Hide
            </>
          )}
        </Button>
      </div>

      {/* Blur Overlay */}
      {isBlurred && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center p-6 bg-white/90 rounded-lg shadow-lg">
            <div className="text-gray-400 text-4xl mb-2">👁️</div>
            <p className="text-gray-600 font-medium">Content Hidden</p>
            <p className="text-gray-500 text-sm">Click "Show" to reveal</p>
          </div>
        </div>
      )}
    </div>
  )
}
