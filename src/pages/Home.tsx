import { Box, Typography } from "@mui/material"
import Header from "components/Header"
import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <Box>
      <Header />
      <Typography>Home</Typography>
      <Typography>하이여</Typography>
      <Link to="/about">정보보기</Link>
    </Box>
  )
}
