import { Button, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { SignUpRequestBody } from "api/member"
import AddEmailModal from "components/member/AddEmailModal"
import useSignUp from "hooks/member/useSignUp"
import React from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()

  const [signUpRequestBody, setSignUpRequestBody] =
    React.useState<SignUpRequestBody>({
      username: "",
      password: "",
      nickname: "",
      name: "",
      email: "",
    })

  const inUsernameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequestBody({
      ...signUpRequestBody,
      username: e.target.value,
    })
  }

  const inPasswordChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequestBody({
      ...signUpRequestBody,
      password: e.target.value,
    })
  }

  const inNicknameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequestBody({
      ...signUpRequestBody,
      nickname: e.target.value,
    })
  }

  const inNameChagned = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpRequestBody({
      ...signUpRequestBody,
      name: e.target.value,
    })
  }

  const handleEmailAddSuccess = (addedEmail: string) => {
    setSignUpRequestBody({
      ...signUpRequestBody,
      email: addedEmail,
    })
  }

  const [addEmailModalOpen, setAddEmailModalOpen] =
    React.useState<boolean>(false)

  const { fetch: signUp } = useSignUp({ requestBody: signUpRequestBody })

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
          height: 500,
          width: 400,
          mt: 10,
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
          <Typography variant="h5" gutterBottom>
            회원가입
          </Typography>
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
              fullWidth
              value={signUpRequestBody.username}
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
              type="password"
              variant="standard"
              value={signUpRequestBody.password}
              onChange={inPasswordChanged}
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
              label="닉네임"
              variant="standard"
              value={signUpRequestBody.nickname}
              onChange={inNicknameChanged}
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
              label="이름"
              variant="standard"
              value={signUpRequestBody.name}
              onChange={inNameChagned}
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
              label="이메일을 추가하세요."
              variant="standard"
              value={signUpRequestBody.email}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ mb: 1 }}
              disableElevation
              variant="contained"
              onClick={() => setAddEmailModalOpen(true)}
            >
              이메일 추가
            </Button>
          </Box>
          {addEmailModalOpen ? (
            <AddEmailModal
              open={addEmailModalOpen}
              handleClose={() => setAddEmailModalOpen(false)}
              onSuccess={handleEmailAddSuccess}
            />
          ) : null}
        </Box>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ backgroundColor: "gold", color: "black" }}
            variant="contained"
            onClick={signUp}
          >
            회원가입
          </Button>
          <Button onClick={() => navigate(-1)}>취소</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp
