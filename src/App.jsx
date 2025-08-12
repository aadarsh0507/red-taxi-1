import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Updated import paths to use src/components directly
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Features } from "./components/features"
import { Footer } from "./components/footer"
import { Navigation } from "./components/navigation"
import { ChatWidget } from "./components/chat-widget"
import { AdminLogin } from "./pages/admin/login"
import { AdminDashboard } from "./pages/admin/dashboard"
import { About } from "./pages/about"
import { Booking } from "./pages/booking"
import { Tracking } from "./pages/tracking"
import { Contact } from "./pages/contact"
import "./App.css"

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Footer />
      <ChatWidget />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
