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
    <Box>
      <Typography variant="h5" gutterBottom>
        회원가입
      </Typography>
      <TextField
        label="아이디"
        variant="outlined"
        fullWidth
        value={signUpRequestBody.username}
        onChange={inUsernameChanged}
      />
      <TextField
        label="비밀번호"
        type="password"
        variant="outlined"
        fullWidth
        value={signUpRequestBody.password}
        onChange={inPasswordChanged}
      />
      <TextField
        label="닉네임"
        variant="outlined"
        fullWidth
        value={signUpRequestBody.nickname}
        onChange={inNicknameChanged}
      />
      <TextField
        label="이름"
        variant="outlined"
        fullWidth
        value={signUpRequestBody.name}
        onChange={inNameChagned}
      />
      <TextField
        label="이메일"
        variant="outlined"
        fullWidth
        value={signUpRequestBody.email}
        InputProps={{ readOnly: true }}
      />
      <Button
        disableElevation
        variant="contained"
        onClick={() => setAddEmailModalOpen(true)}
      >
        이메일 추가
      </Button>
      {addEmailModalOpen ? (
        <AddEmailModal
          open={addEmailModalOpen}
          handleClose={() => setAddEmailModalOpen(false)}
          onSuccess={handleEmailAddSuccess}
        />
      ) : null}
      <Button disableElevation variant="contained" onClick={signUp}>
        회원가입
      </Button>
      <Button onClick={() => navigate(-1)}>취소</Button>
    </Box>
  )
}

export default SignUp
