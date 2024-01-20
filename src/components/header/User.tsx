import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import useLogout from "hooks/auth/useLogout"
import { useNavigate } from "react-router-dom"

const User = () => {
  const navigate = useNavigate()

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
    navigate("/my-page")
  }

  const { fetch: logout } = useLogout()

  const settings = [
    { name: "마이페이지", onClick: myPageHandleClick },
    { name: "로그아웃", onClick: () => logout(accountButtonHandleClose) },
  ]

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
        {settings.map(setting => (
          <MenuItem key={setting.name} onClick={setting.onClick}>
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default User
