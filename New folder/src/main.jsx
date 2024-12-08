import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Dashboardhome from './pages/dashboardhome.jsx'
import Staffpage from './pages/staffpage.jsx'
import Venue from './pages/venue.jsx'
import Bookingconformation from './pages/bookingcon.jsx'
import Addvenue1 from './pages/addvenue1.jsx'
import BookingApproval from './components/approval.jsx'
import Addvenue2 from './pages/addvenue2.jsx'
import History from './pages/history.jsx'
import Approved from './pages/approved.jsx'
import Analytics from './pages/analytics.jsx'
const Layout = () => {
  const location = useLocation();
  return (
    <div >
      {
        location.pathname !== '/login' && location.pathname !== '/register' &&
        (
          <Header />
        )
      }
      <Outlet />
    </div>
  )
}
const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/sidebar',
    element: <Sidebar />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboardhome',
    element: <Dashboardhome />
  },
  {
    path: '/staffpage',
    element: <Staffpage />
  },
  {
    path: '/venue',
    element: <Venue />
  },
  {
    path: '/history',
    element: <History />
  },
  {
    path: '/booking',
    element: <Bookingconformation />
  },
  {
    path: '/addvenue1',
    element: <Addvenue1 />
  },
  {
    path: '/addvenue2',
    element: <Addvenue2 />
  },
  {
    path: '/approval',
    element: <BookingApproval />
  },
  {
    path: '/approved',
    element: <Approved />
  },
  {
    path: '/analytics',
    element: <Analytics />
  },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
