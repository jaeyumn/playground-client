import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"

const AnonymousUserRoute: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)

const PageRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AnonymousUserRoute />
    </BrowserRouter>
  )
}

export default PageRoutes
