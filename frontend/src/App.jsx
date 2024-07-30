import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Outlet/> 
    </div>
    {/* Outlet is use for rendering child routes in nested routing setups. */}
    <MyFooter/>
    </>
  )
}

export default App
