import { Box, Button, Divider, TextField, Typography } from "@mui/material"
import { SignInRequestBody } from "api/auth"
import useSignIn from "hooks/auth/useSignIn"
import React from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate()

  const [signInRequestBody, setSignInRequestBody] =
    React.useState<SignInRequestBody>({
      username: "",
      password: "",
    })

  const inUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInRequestBody({
      ...signInRequestBody,
      username: e.target.value,
    })
  }

  const inPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInRequestBody({
      ...signInRequestBody,
      password: e.target.value,
    })
  }

  const { fetch: signIn } = useSignIn({ requestBody: signInRequestBody })

  const onSignUpButtonClick = () => {
    navigate("/sign-up")
  }

  const onEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      signIn()
    }
  }

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
            <TextField
              sx={{ width: 300 }}
              label="아이디"
              variant="standard"
              onChange={inUsernameChanged}
            />
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
              onChange={inPasswordChanged}
              onKeyDown={onEnterKeyDown}
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
              onClick={signIn}
            >
              로그인
            </Button>
            <Box sx={{ display: "flex" }}>
              <Button>아이디 찾기</Button>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button>비밀번호 찾기</Button>
            </Box>
            <Button onClick={onSignUpButtonClick}>회원이 아니신가요?</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SignIn
