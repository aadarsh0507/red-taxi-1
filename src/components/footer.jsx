import { Link } from "react-router-dom"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-[#b11226]" />
              <span className="font-bold text-xl">RedTaxi</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/booking" className="block text-gray-300 hover:text-[#b11226] transition-colors">
                Book a Ride
              </Link>
              <Link to="/tracking" className="block text-gray-300 hover:text-[#b11226] transition-colors">
                Track Taxi
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#b11226] transition-colors">
                Contact Us
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#b11226] transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
