import { Box, Button, Divider, TextField, Typography } from "@mui/material"
import React from "react"

const SignIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: 300,
          width: 400,
          mt: 20,
        }}
      >
        <Box
          sx={{
            height: "20%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Login</Typography>
        </Box>
        <Box
          sx={{
            height: "80%",
            width: "100%",
            border: 1,
            borderRadius: 1,
            borderColor: "lightgray",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "20%",
              width: "100%",
              display: "center",
              justifyContent: "center",
            }}
          >
            <TextField sx={{ width: 300 }} label="아이디" variant="standard" />
          </Box>
          <Box
            sx={{
              height: "20%",
              width: "100%",
              display: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{ width: 300 }}
              label="비밀번호"
              variant="standard"
              type="password"
            />
          </Box>
          <Box
            sx={{
              height: "60%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                my: 1,
                width: 300,
                backgroundColor: "gold",
                color: "black",
              }}
              variant="contained"
            >
              로그인
            </Button>
            <Box sx={{ display: "flex" }}>
              <Button>아이디 찾기</Button>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button>비밀번호 찾기</Button>
            </Box>
            <Button>회원이 아니신가요?</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn
