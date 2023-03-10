// import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./screens/About";
import Header from './screens/Header';
import Login from "./screens/Login";

const App = () => {
  return (
  <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
