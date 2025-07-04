"use client"

import { useState } from "react"
import IntegrationCard from "./integration-card"
import type { Integration } from "../types/integration"

interface IntegrationCardWithBlurProps {
  integration: Integration
  featured?: boolean
  shouldBlur?: boolean
}

export default function IntegrationCardWithBlur({
  integration,
  featured = false,
  shouldBlur = false,
}: IntegrationCardWithBlurProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative transition-all duration-300 ${
        shouldBlur && !isHovered ? "blur-sm scale-95 opacity-70" : "blur-none scale-100 opacity-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IntegrationCard integration={integration} featured={featured} />

      {/* Blur Indicator */}
      {shouldBlur && !isHovered && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-xl flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 px-3 py-1 rounded-full text-xs text-gray-600 font-medium">Hover to view</div>
        </div>
      )}
    </div>
  )
}
