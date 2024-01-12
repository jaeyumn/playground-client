import { Box, Button, Typography } from "@mui/material"
import React from "react"

const HeaderMenus = () => {
  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button sx={{ flex: 1, textAlign: "center", color: "black" }}>
        놀이터
      </Button>
      <Typography sx={{ flex: 1, textAlign: "center" }}>Menu 2</Typography>
      <Typography sx={{ flex: 1, textAlign: "center" }}>Menu 3</Typography>
      <Typography sx={{ flex: 1, textAlign: "center" }}>Menu 4</Typography>
    </Box>
  )
}

export default HeaderMenus
