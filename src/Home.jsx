import { useAuth } from './context/AuthContext'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="home">
      <h1>Welcome{user ? `, ${user.email}` : ''}!</h1>
      <p>
        {user ? 'You are successfully logged in!' : 'Please login or register'}
      </p>
    </div>
  )
}
