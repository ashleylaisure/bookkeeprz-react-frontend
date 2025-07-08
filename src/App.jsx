import React from "react"
import {Routes, Route} from "react-router-dom"
import About from "./components/About"
import Create from "./components/Create"
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"


function App() {

  const myWidth = 220
  return (
    <div className="App">
      <NavBar 
        drawerWidth={myWidth}
        content={

          <Routes>
            <Route path="" element = {<Dashboard />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/create" element={<Create />}/>
            {/* <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/delete/:id" element={<Delete/>}/> */}
          </Routes>
          
        }
      />
      
    </div>
  )
}

export default App
