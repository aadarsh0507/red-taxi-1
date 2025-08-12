import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card.jsx"
import { Button } from "../../components/ui/button.jsx"
import { Car, Users, LogOut } from "lucide-react"
import { Link } from "react-router-dom"

// Mock data
const mockBookings = [
  {
    id: "B001",
    customer: "John Doe",
    pickup: "123 Main St",
    dropoff: "456 Oak Ave",
    status: "active",
    time: "2:30 PM",
    fare: "$15.50",
  },
  {
    id: "B002",
    customer: "Jane Smith",
    pickup: "789 Pine St",
    dropoff: "321 Elm St",
    status: "completed",
    time: "1:45 PM",
    fare: "$12.00",
  },
  {
    id: "B003",
    customer: "Mike Johnson",
    pickup: "555 Broadway",
    dropoff: "777 Park Ave",
    status: "pending",
    time: "3:15 PM",
    fare: "$18.75",
  },
  {
    id: "B004",
    customer: "Sarah Wilson",
    pickup: "999 First St",
    dropoff: "111 Second St",
    status: "active",
    time: "2:50 PM",
    fare: "$9.25",
  },
]

const mockMessages = [
  {
    id: "M001",
    customer: "John Doe",
    message: "Where is my taxi? It's been 10 minutes.",
    time: "2:35 PM",
    status: "unread",
  },
  { id: "M002", customer: "Jane Smith", message: "Thank you for the great service!", time: "1:50 PM", status: "read" },
  {
    id: "M003",
    customer: "Mike Johnson",
    message: "Can I change my pickup location?",
    time: "3:20 PM",
    status: "unread",
  },
]

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      navigate("/admin/login")
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    navigate("/admin/login")
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-[#f0ebe3]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-[#b11226]" />
              <span className="font-bold text-xl text-black">RedTaxi Admin</span>
            </Link>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-[#b11226] text-[#b11226] hover:bg-[#b11226] hover:text-white bg-transparent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Total Bookings</CardTitle>
              <Users className="h-4 w-4 text-[#b11226]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">1,234</div>
              <p className="text-xs text-black/70">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Active Rides</CardTitle>
              <Car className="h-4 w-4 text-[#b11226]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">47</div>
              <p className="text-xs text-black/70">Currently on the road</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Revenue Today</CardTitle>
              <div className="h-4 w-4 text-[#b11226]">$</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">$2,847</div>
              <p className="text-xs text-black/70">+8% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Customer Rating</CardTitle>
              <div className="h-4 w-4 text-[#b11226]">⭐</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">4.8</div>
              <p className="text-xs text-black/70">Out of 5 stars</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-black">Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#b11226]"></div>
                        <div>
                          <p className="font-medium text-black">{booking.customer}</p>
                          <p className="text-sm text-black/70">
                            {booking.pickup} → {booking.dropoff}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-black">{booking.fare}</p>
                      <p className="text-xs text-black/70">{booking.time}</p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          booking.status === "active"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-black">Customer Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div key={message.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-black">{message.customer}</p>
                        <p className="text-sm text-black/70 mt-1">{message.message}</p>
                        <p className="text-xs text-black/50 mt-2">{message.time}</p>
                      </div>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          message.status === "unread"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
                          <CardTitle className="text-lg text-black">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="w-full bg-[#b11226] hover:bg-[#8f0e1f] text-white">
                <Car className="h-4 w-4 mr-2" />
                Add New Driver
              </Button>
              <Button className="w-full bg-[#b11226] hover:bg-[#8f0e1f] text-white">
                <Users className="h-4 w-4 mr-2" />
                View All Bookings
              </Button>
              <Button className="w-full bg-[#b11226] hover:bg-[#8f0e1f] text-white">
                <div className="h-4 w-4 mr-2">📊</div>
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
