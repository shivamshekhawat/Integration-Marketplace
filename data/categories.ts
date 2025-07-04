import type { Category } from "../types/integration"
import { integrations } from "./integrations"

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
    icon: "🌐",
    count: integrations.length,
  },
  {
    id: "sms",
    name: "SMS",
    icon: "💬",
    count: integrations.filter((i) => i.category.includes("sms")).length,
  },
  {
    id: "email",
    name: "Email",
    icon: "✉️",
    count: integrations.filter((i) => i.category.includes("email")).length,
  },
  {
    id: "payment",
    name: "Payment Gateway",
    icon: "💳",
    count: integrations.filter((i) => i.category.includes("payment")).length,
  },
  {
    id: "map",
    name: "Map",
    icon: "🗺️",
    count: integrations.filter((i) => i.category.includes("map")).length,
  },
  {
    id: "communication",
    name: "Communication",
    icon: "📱",
    count: integrations.filter((i) => i.category.includes("communication")).length,
  },
  {
    id: "oms",
    name: "OMS",
    icon: "📦",
    count: integrations.filter((i) => i.category.includes("oms")).length,
  },
]
