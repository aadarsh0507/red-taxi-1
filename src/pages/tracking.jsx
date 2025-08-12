import { useState } from "react"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ChatWidget } from "../components/chat-widget"
import { MapPin, Clock, Car, Phone, User, Navigation as NavigationIcon } from "lucide-react"

export function Tracking() {
  const [bookingRef, setBookingRef] = useState("")
  const [isTracking, setIsTracking] = useState(false)
  const [trackingData, setTrackingData] = useState(null)

  const handleTrack = (e) => {
    e.preventDefault()
    if (bookingRef.trim()) {
      setIsTracking(true)
      // Simulate API call
      setTimeout(() => {
        setTrackingData({
          status: "en_route",
          driver: "John Smith",
          vehicle: "Toyota Camry - ABC123",
          phone: "+1 (555) 123-4567",
          eta: "8 minutes",
          distance: "2.3 km",
          location: "Downtown District"
        })
        setIsTracking(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#b11226] to-[#8f0e1f] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Track Your Taxi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Real-time tracking for your peace of mind. Know exactly where your taxi is and when it will arrive.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#4a4a4a] mb-6 font-heading text-center">
              Enter Your Booking Reference
            </h2>
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label htmlFor="bookingRef" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Booking Reference Number
                </label>
                <input
                  type="text"
                  id="bookingRef"
                  value={bookingRef}
                  onChange={(e) => setBookingRef(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent text-center text-lg font-mono"
                  placeholder="e.g., RTX-2024-001"
                  required
                />
                <p className="text-sm text-[#4a4a4a]/60 mt-2 text-center">
                  You can find this in your booking confirmation email or SMS
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isTracking || !bookingRef.trim()}
                className="w-full bg-[#b11226] hover:bg-[#8f0e1f] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isTracking ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  "Track Taxi"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#4a4a4a] mb-2">Taxi En Route</h3>
                <p className="text-[#4a4a4a]/70">Your taxi is on the way to your pickup location</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">Driver:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.driver}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">Vehicle:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.vehicle}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">Phone:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.phone}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">ETA:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.eta}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <NavigationIcon className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">Distance:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.distance}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#b11226]" />
                    <span className="text-[#4a4a4a] font-medium">Location:</span>
                    <span className="text-[#4a4a4a]/70">{trackingData.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Live Tracking Active</h4>
                    <p className="text-blue-700 text-sm">
                      Your taxi location is being updated in real-time. You'll receive notifications 
                      when the driver arrives at your pickup location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4 font-heading">Live Map View</h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#b11226] mx-auto mb-4" />
                  <p className="text-[#4a4a4a]/70">Interactive map view coming soon</p>
                  <p className="text-sm text-[#4a4a4a]/50">Real-time GPS tracking will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How Tracking Works */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#4a4a4a] mb-6 font-heading text-center">
              How Our Tracking Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#b11226]">1</span>
                </div>
                <h4 className="font-semibold text-[#4a4a4a] mb-2">Book Your Ride</h4>
                <p className="text-[#4a4a4a]/70">
                  Make a booking through our platform and receive a unique reference number
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#b11226]">2</span>
                </div>
                <h4 className="font-semibold text-[#4a4a4a] mb-2">Real-Time Updates</h4>
                <p className="text-[#4a4a4a]/70">
                  Track your taxi's location, ETA, and driver details in real-time
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#b11226]">3</span>
                </div>
                <h4 className="font-semibold text-[#4a4a4a] mb-2">Safe Arrival</h4>
                <p className="text-[#4a4a4a]/70">
                  Get notified when your taxi arrives and enjoy your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </div>
  )
}
