import { useState } from "react"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ChatWidget } from "../components/chat-widget"

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    serviceType: "",
    date: undefined,
    time: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#b11226] to-[#8f0e1f] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Book Your Ride</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Quick and easy taxi booking. Get a ride in minutes with our reliable service.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4a4a4a] mb-4 font-heading">Booking Form</h2>
          <p className="text-lg text-[#4a4a4a]/70">Fill in the details below to book your taxi</p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  id="pickup"
                  value={formData.pickup}
                  onChange={(e) => handleInputChange("pickup", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter pickup address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dropoff" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Drop-off Location *
                </label>
                <input
                  type="text"
                  id="dropoff"
                  value={formData.dropoff}
                  onChange={(e) => handleInputChange("dropoff", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter destination address"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => handleInputChange("serviceType", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  required
                >
                  <option value="">Select service type</option>
                  <option value="standard">Standard Taxi</option>
                  <option value="premium">Premium Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury Vehicle</option>
                  <option value="airport">Airport Transfer</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                Pickup Time *
              </label>
              <input
                type="time"
                id="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#b11226] hover:bg-[#8f0e1f] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                "Book Taxi Now"
              )}
            </button>
          </form>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Booking Confirmed!</h3>
            <p className="text-green-700 mb-4">
              Your taxi has been booked successfully. You'll receive a confirmation SMS with your booking reference.
            </p>
            <p className="text-sm text-green-600">
              Use the tracking page to monitor your taxi's location in real-time.
            </p>
          </div>
        )}
      </div>

      <Footer />
      <ChatWidget />
    </div>
  )
}
