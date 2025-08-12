import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ChatWidget } from "../components/chat-widget"
import { Car, Clock, Shield, Users, Award, MapPin } from "lucide-react"

export function About() {
  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#b11226] to-[#8f0e1f] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">About RedTaxi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Your trusted partner for safe, reliable, and comfortable transportation across the city
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4a4a] mb-6 font-heading">Our Mission</h2>
          <p className="text-lg text-[#4a4a4a]/70 max-w-3xl mx-auto">
            At RedTaxi, we're committed to providing exceptional taxi services that prioritize safety, 
            comfort, and reliability. We believe everyone deserves a premium transportation experience 
            that's both affordable and convenient.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">Safety First</h3>
            <p className="text-[#4a4a4a]/70">
              All our drivers are thoroughly vetted and vehicles are regularly inspected for your safety.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">24/7 Service</h3>
            <p className="text-[#4a4a4a]/70">
              Available round the clock to serve you whenever you need reliable transportation.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">Modern Fleet</h3>
            <p className="text-[#4a4a4a]/70">
              Well-maintained, comfortable vehicles equipped with modern amenities for your comfort.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">Professional Drivers</h3>
            <p className="text-[#4a4a4a]/70">
              Experienced, courteous drivers who know the city inside out for efficient navigation.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">Quality Service</h3>
            <p className="text-[#4a4a4a]/70">
              Committed to excellence in every ride, ensuring customer satisfaction is our top priority.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#b11226]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#b11226]" />
            </div>
            <h3 className="text-xl font-semibold text-[#4a4a4a] mb-2">City Coverage</h3>
            <p className="text-[#4a4a4a]/70">
              Comprehensive coverage across the entire city with quick response times.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-4 font-heading">Our Story</h3>
          <p className="text-[#4a4a4a]/70 mb-4">
            Founded with a vision to revolutionize urban transportation, RedTaxi has been serving 
            our community for over a decade. What started as a small fleet of taxis has grown into 
            one of the most trusted names in city transportation.
          </p>
          <p className="text-[#4a4a4a]/70 mb-4">
            We've consistently evolved with technology, implementing real-time tracking, 
            mobile booking, and contactless payments to enhance your experience while maintaining 
            the personal touch that sets us apart.
          </p>
          <p className="text-[#4a4a4a]/70">
            Today, RedTaxi continues to grow, serving thousands of satisfied customers daily 
            and maintaining our commitment to safety, reliability, and exceptional service.
          </p>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </div>
  )
}
