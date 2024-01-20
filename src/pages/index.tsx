import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import useReissue from "hooks/auth/useReissue"
import { Backdrop, CircularProgress } from "@mui/material"
import { getBackdropStore } from "store/backdropStore"
import Home from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const MemberRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

const AnonymousUserRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/sign-in" />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
)

const PageRoutes = () => {
  const { token, isFetchingReissue } = useReissue()

  const { backdropOpen } = getBackdropStore()
  if (isFetchingReissue !== "FETCHED") {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  }

  return (
    <BrowserRouter>
      {token ? <MemberRoute /> : <AnonymousUserRoute />}
      {backdropOpen}
    </BrowserRouter>
  )
}

export default PageRoutes
