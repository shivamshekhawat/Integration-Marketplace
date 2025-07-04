"use client"

import Header from "./header"
import HeroSection from "./hero-section"
import CategorySidebar from "./category-sidebar"
import IntegrationGrid from "./integration-grid"
import { integrations } from "../data/integrations"
import { categories } from "../data/categories"
import { useIntegrationFilter } from "../hooks/use-integration-filter"

export default function IntegrationMarketplace() {
  const { selectedCategory, setSelectedCategory, searchTerm, setSearchTerm } = useIntegrationFilter(integrations)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <IntegrationGrid integrations={integrations} selectedCategory={selectedCategory} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  )
}
