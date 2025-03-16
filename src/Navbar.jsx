import { Link } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">AuthApp</Link>
        
        <div className="nav-links">
          {user ? (
            <button onClick={logout} className="nav-button">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
