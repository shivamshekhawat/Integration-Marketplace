"use client"

import { useState } from "react"
import { Star, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Integration } from "../types/integration"

interface IntegrationCardProps {
  integration: Integration
  featured?: boolean
}

export default function IntegrationCard({ integration, featured = false }: IntegrationCardProps) {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleIntegrate = () => {
    setShowModal(true)
  }

  const handleViewDetails = () => {
    setShowModal(true)
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const renderConfigurationModal = () => (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration Configuration</h3>
      <p className="text-blue-600 mb-6 text-sm sm:text-base">
        Please provide the required credentials to integrate this service.
      </p>

      <div className="space-y-4">
        {integration.fields?.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && "*"}
            </label>
            <div className="relative">
              <Input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="w-full text-sm sm:text-base"
              />
              {field.type === "email" && (
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-gray-600 text-sm mb-1">Need help finding these credentials?</p>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          Where to find your {integration.name} details?
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
          Integrate
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Test Connection
        </Button>
      </div>
    </>
  )

  const renderRequestModal = () => (
    <>
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Request Integration</h3>
      <p className="text-blue-600 mb-6 text-sm sm:text-base">
        This integration is not yet available. Submit a request and we'll notify you when it's ready.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
            Why do you need this integration?
          </label>
          <Textarea
            id="useCase"
            placeholder="Please describe your use case..."
            value={formData.useCase || ""}
            onChange={(e) => handleInputChange("useCase", e.target.value)}
            className="w-full h-20 sm:h-24 resize-none text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <div className="relative">
            <Input
              id="contactEmail"
              type="email"
              placeholder="your@email.com"
              value={formData.contactEmail || ""}
              onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              className="w-full text-sm sm:text-base"
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
          Request Integration
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
      </div>
    </>
  )

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 ${integration.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-200`}
          >
            {integration.icon}
          </div>
          {featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Featured</span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
          {integration.name}
        </h3>

        <div className="flex items-center gap-2 mb-3 text-sm">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium text-gray-700 ml-1">{integration.rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{integration.installs} installs</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 sm:mb-6 line-clamp-2 leading-relaxed">{integration.description}</p>

        <div className="flex gap-2">
          {featured ? (
            // Featured integrations: only show Integrate button
            <Button
              onClick={handleIntegrate}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium text-sm sm:text-base"
            >
              Integrate →
            </Button>
          ) : (
            // All integrations: only show View Details button
            <Button
              onClick={handleViewDetails}
              variant="outline"
              className="flex-1 hover:bg-gray-50 bg-transparent text-sm sm:text-base"
            >
              View Details
            </Button>
          )}
        </div>
      </div>

      {/* Integration Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${integration.color} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold`}
                >
                  {integration.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
                    {integration.name}
                  </DialogTitle>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base line-clamp-2">{integration.description}</p>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6">{integration.available ? renderConfigurationModal() : renderRequestModal()}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
