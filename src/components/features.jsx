import { CheckCircle, Shield, Clock, MapPin, CreditCard, Users, Smartphone, Star } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Professional licensed drivers",
      description: "All our drivers are thoroughly vetted and licensed",
    },
    {
      icon: Clock,
      title: "24/7 customer support",
      description: "Round-the-clock assistance whenever you need it",
    },
    {
      icon: MapPin,
      title: "Real-time GPS tracking",
      description: "Track your ride in real-time for peace of mind",
    },
    {
      icon: CreditCard,
      title: "Multiple payment options",
      description: "Cash, card, or digital wallet - your choice",
    },
    {
      icon: Users,
      title: "Clean and maintained vehicles",
      description: "Regularly serviced and sanitized vehicles",
    },
    {
      icon: Star,
      title: "Competitive pricing",
      description: "Fair rates with no hidden charges",
    },
    {
      icon: Smartphone,
      title: "Easy online booking",
      description: "Book instantly through our website or app",
    },
    {
      icon: CheckCircle,
      title: "Mobile app available",
      description: "Download our app for the best experience",
    },
  ]

  return (
    <section className="py-20 bg-[#f0ebe3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a4a4a] mb-6 font-heading">Why Choose RedTaxi?</h2>
          <p className="text-lg text-[#4a4a4a]/70 max-w-2xl mx-auto">
            We're committed to providing the best transportation experience in the city. Here's what makes us different
            from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="/placeholder-jhp1z.png"
              alt="RedTaxi Professional Vehicle"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-4 left-4 bg-[#b11226] text-white px-4 py-2 rounded-lg font-semibold">
              #1 Rated Taxi Service
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.slice(0, 4).map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-[#b11226]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4a4a4a] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#4a4a4a]/70">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(4).map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index + 4}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#b11226]/10 rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-[#b11226]" />
                </div>
                <h3 className="font-semibold text-[#4a4a4a] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4a4a4a]/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
