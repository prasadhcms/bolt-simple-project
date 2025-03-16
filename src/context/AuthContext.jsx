import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setUser({ email: 'user@example.com' }) // Replace with real user data
  }, [])

  const login = async (credentials) => {
    // Implement real login logic
    localStorage.setItem('token', 'mock-jwt-token')
    setUser({ email: credentials.email })
  }

  const register = async (userData) => {
    // Implement real registration
    localStorage.setItem('token', 'mock-jwt-token')
    setUser({ email: userData.email })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
