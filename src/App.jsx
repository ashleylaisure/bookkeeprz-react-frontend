import React from "react"
import {Routes, Route} from "react-router-dom"
import About from "./components/About"
import Create from "./components/Create"
import NavBar from "./components/NavBar"
import Edit from "./components/Edit"
import MyBooks from "./components/MyBooks"
import Home from "./components/Home"
import Delete from "./components/Delete"


function App() {

  const myWidth = 220
  return (
    <div className="App">
      <NavBar 
        drawerWidth={myWidth}
        content={

          <Routes>
            <Route path="" element = {<Home />}/>
            <Route path="/books" element = {<MyBooks />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="books/edit/:id" element={<Edit/>}/>
            <Route path="books/delete/:id" element={<Delete/>}/>
          </Routes>
          
        }
      />
      
    </div>
  )
}

export default App
