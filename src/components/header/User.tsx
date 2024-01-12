import { Box, Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"

const User = () => {
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

  const myPageHandleClick = () => {
    setAccountAnchor(null)
  }

  const logoutHandleClick = () => {
    setAccountAnchor(null)
  }

  return (
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
        <MenuItem onClick={myPageHandleClick}>마이페이지</MenuItem>
        <MenuItem onClick={logoutHandleClick}>로그아웃</MenuItem>
      </Menu>
    </Box>
  )
}

export default User
