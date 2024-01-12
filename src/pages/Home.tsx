import { Box, Divider, Typography } from "@mui/material"
import Header from "components/header/Header"
import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Box>
      <Header />
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography>하이여</Typography>
        <Link to="/sign-in">로그인하기</Link>
      </Box>
    </Box>
  )
}

export default Home
