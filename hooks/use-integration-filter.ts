"use client"

import { useState, useMemo } from "react"
import type { Integration, CategoryId } from "../types/integration"

export function useIntegrationFilter(integrations: Integration[]) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesCategory = selectedCategory === "all" || integration.category.includes(selectedCategory)
      const matchesSearch =
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [integrations, selectedCategory, searchTerm])

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    filteredIntegrations,
  }
}
