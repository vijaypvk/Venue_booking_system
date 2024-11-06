import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider,useLocation } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Dashboardhome from './pages/dashboardhome.jsx'
import Staffpage from './pages/staffpage.jsx'


const Layout =()=>{
  const location = useLocation();
  return(
    <div>
      {
        location.pathname !== '/login' && location.pathname !== '/register' &&    
        (
          <Header />
        )
      }      
      <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:'/',
    element: <App/>
  },
  {
    path:'/register',
  element: <Register/>
  },
  {
    path:'/sidebar',
  element: <Sidebar/>
  },
  {
    path:'/login',
  element: <Login/>
  },
  {
    path:'/dashboardhome',
  element: <Dashboardhome/>
  },
  {
    path:'/Staffpage',
  element: <Staffpage/>
  },
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/> 
  </StrictMode>
)
