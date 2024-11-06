
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import Dashboardhome from './pages/dashboardhome'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Staffpage from './pages/staffpage'

function App() {


  return (
    <> 
      <Login/>
      <Register/>
      <Dashboardhome/>   
      <Sidebar/>
     <Staffpage/>
    </>
    
  )
}

export default App
