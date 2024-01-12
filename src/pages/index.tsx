import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"

const AnonymousUserRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
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
