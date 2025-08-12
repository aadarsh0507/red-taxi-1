import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X, Car } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-[#b11226]" />
            <span className="font-bold text-xl text-[#4a4a4a]">RedTaxi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#4a4a4a] hover:text-[#b11226] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#4a4a4a] hover:text-[#b11226] transition-colors">
              About
            </Link>
            <Link to="/booking" className="text-[#4a4a4a] hover:text-[#b11226] transition-colors">
              Book Ride
            </Link>
            <Link to="/tracking" className="text-[#4a4a4a] hover:text-[#b11226] transition-colors">
              Track Taxi
            </Link>
            <Link to="/contact" className="text-[#4a4a4a] hover:text-[#b11226] transition-colors">
              Contact
            </Link>
            <Link to="/admin/login">
              <Button
                variant="outline"
                className="border-[#b11226] text-[#b11226] hover:bg-[#b11226] hover:text-white bg-transparent"
              >
                Admin Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-[#4a4a4a] hover:text-[#b11226]">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-[#4a4a4a] hover:text-[#b11226]">
                About
              </Link>
              <Link to="/booking" className="block px-3 py-2 text-[#4a4a4a] hover:text-[#b11226]">
                Book Ride
              </Link>
              <Link to="/tracking" className="block px-3 py-2 text-[#4a4a4a] hover:text-[#b11226]">
                Track Taxi
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-[#4a4a4a] hover:text-[#b11226]">
                Contact
              </Link>
              <Link to="/admin/login" className="block px-3 py-2">
                <Button className="w-full bg-[#b11226] hover:bg-[#8f0e1f] text-white">Admin Login</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
