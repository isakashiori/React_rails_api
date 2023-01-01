import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./screens/About";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App