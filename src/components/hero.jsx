import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0ebe3] to-[#e8ddd4]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/city-taxi-background.png')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4a4a4a] mb-6 leading-tight font-heading">
            Your Reliable
            <span className="text-[#b11226] block">Taxi Service</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4a4a4a]/80 mb-8 max-w-2xl mx-auto">
            Fast, safe, and affordable rides across the city. Book now and get there in comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/booking">
              <Button size="lg" className="bg-[#b11226] hover:bg-[#8f0e1f] text-white px-8 py-4 text-lg">
                Book Now
              </Button>
            </Link>
            <Link to="/tracking">
              <Button
                size="lg"
                variant="outline"
                className="border-[#b11226] text-[#b11226] hover:bg-[#b11226] hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Track Taxi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
