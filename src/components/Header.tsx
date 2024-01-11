import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "react-router-dom"

const Header = () => {
  const [accountAnchor, setAccountAnchor] = React.useState<null | HTMLElement>(
    null,
  )
  const accountMenuOpen = Boolean(accountAnchor)
  const accountButtonHandleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAccountAnchor(event.currentTarget)
  }
  const accountButtonHandleClose = () => {
    setAccountAnchor(null)
  }

  return (
    <Box
      sx={{
        height: 50,
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <HomeIcon sx={{ color: "darkSalmon" }} fontSize="large" />
        </Link>
      </Box>
      <Box
        sx={{
          width: "75%",
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
      <Box
        sx={{
          width: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button id="account-menu" onClick={accountButtonHandleClick}>
          <PersonIcon color="action" fontSize="large" />
        </Button>
        <Menu
          id="account-menu"
          anchorEl={accountAnchor}
          open={accountMenuOpen}
          onClose={accountButtonHandleClose}
        >
          <MenuItem onClick={accountButtonHandleClose}>마이페이지</MenuItem>
          <MenuItem onClick={accountButtonHandleClose}>로그아웃</MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
