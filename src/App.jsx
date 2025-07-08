import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import About from "./components/About"
import Create from "./components/Create"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  const myWidth = 220

  return (
    <div className="App">
      <NavBar 
        drawerWidth={myWidth}
        content={

          <Routes>
            {/* <Route path="/" element = {<ProtectedRoute> <Home /> </ProtectedRoute>}/> */}
            {/* <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/register" element={<RegisterAndLogout />}/>
            <Route path="*" element={<NotFound />}/> */}

            <Route path="" element = {<Dashboard />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/create" element={<Create />}/>
          </Routes>
          
        }/>
      
    </div>
  )
}

export default App
