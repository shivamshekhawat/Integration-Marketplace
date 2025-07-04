import { Star } from "lucide-react"
import IntegrationCard from "./integration-card"
import type { Integration, CategoryId } from "../types/integration"
import { categories } from "../data/categories"

interface IntegrationGridProps {
  integrations: Integration[]
  selectedCategory: CategoryId
  searchTerm: string
}

export default function IntegrationGrid({ integrations, selectedCategory, searchTerm }: IntegrationGridProps) {
  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === "all" || integration.category.includes(selectedCategory)
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredIntegrations = integrations.filter((integration) => integration.featured)

  return (
    <div className="flex-1 min-w-0">
      {/* Featured Integrations Section */}
      {selectedCategory === "all" && !searchTerm && (
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Star className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Integrations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {featuredIntegrations.map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Integrations Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {selectedCategory === "all"
              ? searchTerm
                ? `Search Results`
                : "All Integrations"
              : `${categories.find((c) => c.id === selectedCategory)?.name} Integrations`}
          </h2>
          <span className="text-gray-500 text-sm">
            {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {filteredIntegrations.length === 0 ? (
          <div className="text-center py-12 px-4">
            <div className="text-gray-400 text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No integrations found</h3>
            <p className="text-gray-600 text-sm sm:text-base">Try adjusting your search or category filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredIntegrations.map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
