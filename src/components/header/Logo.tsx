import React from "react"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import { Box } from "@mui/material"

const Logo = () => {
  return (
    <Box
      sx={{
        width: "30%",
        display: "flex",
        alignItems: "center",
        pl: 5,
      }}
    >
      <Link to="/">
        <HomeIcon sx={{ color: "darkSalmon" }} fontSize="large" />
      </Link>
    </Box>
  )
}

export default Logo
