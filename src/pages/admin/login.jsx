import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button.jsx"
import { Input } from "../../components/ui/input.jsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card.jsx"
import { Label } from "../../components/ui/label.jsx"
import { Alert, AlertDescription } from "../../components/ui/alert.jsx"
import { Car, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

export function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validation
    if (!email || !password) {
      setError("Missing input - Please fill in all fields")
      setIsLoading(false)
      return
    }

    // Mock authentication (replace with real auth)
    if (email === "admin@redtaxi.com" && password === "admin123") {
      // Simulate API call delay
      setTimeout(() => {
        localStorage.setItem("adminAuth", "true")
        navigate("/admin/dashboard")
      }, 1000)
    } else {
      setTimeout(() => {
        setError("Invalid credentials - Please check your email and password")
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0ebe3] to-[#e8ddd4] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <Car className="h-10 w-10 text-[#b11226]" />
            <span className="font-bold text-2xl text-[#4a4a4a]">RedTaxi</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#4a4a4a]">Admin Portal</h1>
          <p className="text-[#4a4a4a]/70">Sign in to access the dashboard</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-[#4a4a4a]">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@redtaxi.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[#b11226] hover:bg-[#8f0e1f] text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#4a4a4a]/70">Demo credentials: admin@redtaxi.com / admin123</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-[#b11226] hover:underline">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
