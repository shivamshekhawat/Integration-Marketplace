export interface IntegrationField {
  name: string
  label: string
  type: "text" | "email" | "password" | "number"
  placeholder: string
  required: boolean
}

export interface Integration {
  id: string
  name: string
  description: string
  rating: number
  installs: string
  category: string[]
  icon: string
  color: string
  featured?: boolean
  available: boolean
  fields?: IntegrationField[]
}

export interface Category {
  id: string
  name: string
  icon: string
  count: number
}

export type CategoryId = "all" | "sms" | "email" | "payment" | "map" | "communication" | "oms"
