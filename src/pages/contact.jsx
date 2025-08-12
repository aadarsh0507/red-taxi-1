import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"
import { ChatWidget } from "../components/chat-widget"

export function Contact() {
  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#b11226] to-[#8f0e1f] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Get in touch with our team. We're here to help with any questions or concerns about our taxi services.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#4a4a4a] mb-6 font-heading">Get In Touch</h2>
            <p className="text-lg text-[#4a4a4a]/70 mb-8">
              Have a question about our services? Need to make a special booking request? 
              Our customer service team is here to help you 24/7.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#b11226]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#b11226]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4a4a4a]">Phone Support</h3>
                  <p className="text-[#4a4a4a]/70">+1 (555) 123-4567</p>
                  <p className="text-sm text-[#4a4a4a]/60">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#b11226]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#b11226]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4a4a4a]">Email Support</h3>
                  <p className="text-[#4a4a4a]/70">support@redtaxi.com</p>
                  <p className="text-sm text-[#4a4a4a]/60">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#b11226]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#b11226]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4a4a4a]">Main Office</h3>
                  <p className="text-[#4a4a4a]/70">123 Taxi Street, Downtown</p>
                  <p className="text-[#4a4a4a]/70">City Center, ST 12345</p>
                  <p className="text-sm text-[#4a4a4a]/60">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#4a4a4a] mb-6 font-heading">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="support">Technical Support</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b11226] focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#b11226] hover:bg-[#8f0e1f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#4a4a4a] mb-6 font-heading">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-[#4a4a4a] mb-2">How do I book a taxi?</h4>
              <p className="text-[#4a4a4a]/70">
                You can book a taxi through our website, mobile app, or by calling our 24/7 hotline. 
                Simply provide your pickup and drop-off locations, preferred time, and service type.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-[#4a4a4a] mb-2">What payment methods do you accept?</h4>
              <p className="text-[#4a4a4a]/70">
                We accept cash, credit cards, debit cards, and digital wallets. 
                All payments are processed securely through our platform.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-[#4a4a4a] mb-2">Can I track my taxi in real-time?</h4>
              <p className="text-[#4a4a4a]/70">
                Yes! Once your booking is confirmed, you'll receive a tracking link that shows 
                your taxi's real-time location and estimated arrival time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#4a4a4a] mb-2">What if I need to cancel my booking?</h4>
              <p className="text-[#4a4a4a]/70">
                You can cancel your booking up to 30 minutes before the scheduled pickup time 
                through our app or by contacting customer service. Cancellation fees may apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </div>
  )
}
