import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const AnonymousUserRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/sign-in" />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
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
