import About from "pages/About"
import Home from "pages/Home"
import React from "react"
import { Route, Routes } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
