
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/pages/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <h1>Welcome to react router dom</h1>
      </div>
      <Outlet/>
    </>
  )
}

export default App

