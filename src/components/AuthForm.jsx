import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AuthForm({ type }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      // Mock API call - replace with real implementation
      localStorage.setItem('token', 'mock-jwt-token')
      navigate('/')
    } catch (err) {
      setError('Authentication failed. Please try again.')
    }
  }

  return (
    <div className="auth-form">
      <h2>{type === 'login' ? 'Sign In' : 'Create Account'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="auth-button">
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>

      <div className="auth-switch">
        {type === 'login' ? (
          <span>Don't have an account? <Link to="/register">Register</Link></span>
        ) : (
          <span>Already have an account? <Link to="/login">Login</Link></span>
        )}
      </div>
    </div>
  )
}
