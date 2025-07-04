import { Settings, Zap, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Integration Marketplace</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hidden sm:flex">
            <Settings className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Settings</span>
          </Button>
          <Button variant="ghost" size="sm" className="sm:hidden">
            <Menu className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
