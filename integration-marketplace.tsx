"use client"

import { useState } from "react"
import { Search, Settings, Zap, Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Integration {
  id: string
  name: string
  description: string
  rating: number
  installs: string
  category: string[]
  icon: string
  color: string
  featured?: boolean
}

const integrations: Integration[] = [
  {
    id: "twilio-sms",
    name: "Twilio SMS",
    description: "Send SMS messages globally with reliable delivery and real-time analytics",
    rating: 4.8,
    installs: "50k+",
    category: ["sms"],
    icon: "💬",
    color: "bg-red-500",
    featured: true,
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    description: "Amazon Simple Notification Service for SMS and push notifications",
    rating: 4.6,
    installs: "40k+",
    category: ["sms"],
    icon: "🔔",
    color: "bg-orange-500",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description: "Email delivery service with advanced analytics and template management",
    rating: 4.9,
    installs: "100k+",
    category: ["email"],
    icon: "✉️",
    color: "bg-blue-500",
    featured: true,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing platform with automation and analytics",
    rating: 4.5,
    installs: "90k+",
    category: ["email"],
    icon: "📧",
    color: "bg-yellow-500",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Accept payments online with powerful APIs and global reach",
    rating: 4.9,
    installs: "200k+",
    category: ["payment"],
    icon: "💳",
    color: "bg-purple-500",
    featured: true,
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Accept PayPal payments with seamless checkout experience",
    rating: 4.3,
    installs: "80k+",
    category: ["payment"],
    icon: "💰",
    color: "bg-blue-600",
  },
  {
    id: "google-maps",
    name: "Google Maps",
    description: "Integrate maps, geocoding, and location services into your app",
    rating: 4.7,
    installs: "150k+",
    category: ["map"],
    icon: "🗺️",
    color: "bg-green-500",
  },
  {
    id: "whatsapp-business",
    name: "WhatsApp Business",
    description: "Send WhatsApp messages to customers with rich media support",
    rating: 4.6,
    installs: "75k+",
    category: ["communication"],
    icon: "📱",
    color: "bg-green-600",
  },
  {
    id: "viber-business",
    name: "Viber Business",
    description: "Reach customers on Viber with multimedia messaging",
    rating: 4.5,
    installs: "25k+",
    category: ["communication"],
    icon: "💜",
    color: "bg-purple-600",
  },
  {
    id: "shipstation",
    name: "ShipStation",
    description: "Order management and shipping solution for e-commerce",
    rating: 4.4,
    installs: "30k+",
    category: ["oms"],
    icon: "📦",
    color: "bg-orange-600",
  },
]

const categories = [
  { id: "all", name: "All", icon: "🌐", count: integrations.length },
  { id: "sms", name: "SMS", icon: "💬", count: integrations.filter((i) => i.category.includes("sms")).length },
  { id: "email", name: "Email", icon: "✉️", count: integrations.filter((i) => i.category.includes("email")).length },
  {
    id: "payment",
    name: "Payment Gateway",
    icon: "💳",
    count: integrations.filter((i) => i.category.includes("payment")).length,
  },
  { id: "map", name: "Map", icon: "🗺️", count: integrations.filter((i) => i.category.includes("map")).length },
  {
    id: "communication",
    name: "Communication",
    icon: "📱",
    count: integrations.filter((i) => i.category.includes("communication")).length,
  },
  { id: "oms", name: "OMS", icon: "📦", count: integrations.filter((i) => i.category.includes("oms")).length },
]

export default function IntegrationMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === "all" || integration.category.includes(selectedCategory)
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredIntegrations = integrations.filter((integration) => integration.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Integration Marketplace</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Integration Marketplace</h2>
          <p className="text-xl mb-8 text-purple-100">
            Discover all the channels and connect to them right away. Extend your platform with powerful integrations.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
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

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Integrations */}
            {selectedCategory === "all" && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Featured Integrations</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredIntegrations.map((integration) => (
                    <IntegrationCard key={integration.id} integration={integration} featured />
                  ))}
                </div>
              </div>
            )}

            {/* All Integrations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Integrations"
                    : `${categories.find((c) => c.id === selectedCategory)?.name} Integrations`}
                </h2>
                <span className="text-gray-500">
                  {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? "s" : ""} found
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration) => (
                  <IntegrationCard key={integration.id} integration={integration} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IntegrationCard({ integration, featured = false }: { integration: Integration; featured?: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}
        >
          {integration.icon}
        </div>
        {featured && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Featured</span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.name}</h3>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700 ml-1">{integration.rating}</span>
        </div>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-600">{integration.installs} installs</span>
      </div>

      <p className="text-gray-600 text-sm mb-6 line-clamp-2">{integration.description}</p>

      <div className="flex gap-2">
        <Button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
          Integrate →
        </Button>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </div>
  )
}
