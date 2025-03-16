import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthForm from './components/AuthForm'
import Home from './Home'
import Navbar from './Navbar'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <AuthForm type="login" /> },
      { path: '/register', element: <AuthForm type="register" /> }
    ]
  }
])

function Layout() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </AuthProvider>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
