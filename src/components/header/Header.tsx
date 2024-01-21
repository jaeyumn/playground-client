import { Box } from "@mui/material"
import React from "react"
import User from "./User"
import HeaderMenus from "./HeaderMenus"
import Logo from "./Logo"

const Header = () => {
  return (
    <Box
      sx={{
        height: 50,
        width: "100%",
        display: "flex",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Logo />
      <HeaderMenus />
      <User />
    </Box>
  )
}

export default Header
