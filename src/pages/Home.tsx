import React from "react"
import { Box, Divider, Typography } from "@mui/material"
import Header from "components/header/Header"

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
      </Box>
    </Box>
  )
}

export default Home
