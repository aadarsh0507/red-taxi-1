import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Car, Users, Truck, Clock } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Car,
      title: "Standard Ride",
      description: "Comfortable and affordable rides for everyday travel",
      price: "From $8",
    },
    {
      icon: Users,
      title: "Group Ride",
      description: "Spacious vehicles for groups up to 6 passengers",
      price: "From $15",
    },
    {
      icon: Truck,
      title: "Cargo Service",
      description: "Safe transportation for your packages and goods",
      price: "From $12",
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Priority booking with fastest pickup times",
      price: "From $12",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-heading">Our Services</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Choose from our range of transportation services designed to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-[#b11226] mx-auto mb-4" />
                <CardTitle className="text-black">{service.title}</CardTitle>
                <CardDescription className="text-black/70">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-[#b11226]">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
