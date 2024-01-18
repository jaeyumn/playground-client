import React from "react"
import { SignInRequestBody, signInApi } from "api/auth"
import { useNavigate } from "react-router-dom"
import { ErrorResponse } from "api"
import { useAlert } from "hooks/useAlert"
import axios from "axios"

interface Props {
  requestBody: SignInRequestBody
}

const useSignIn = ({ requestBody }: Props) => {
  const navigate = useNavigate()
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [error, setError] = React.useState<ErrorResponse>()
  const { addSuccess, addError } = useAlert()

  const { username, password } = requestBody

  const checkRequest = (): boolean => !!username && !!password

  const fetch = async () => {
    if (!checkRequest()) {
      addError("아이디, 비밀번호를 입력해 주세요.")
      return
    }

    try {
      setIsFetching(true)
      await signInApi(requestBody)
      addSuccess("로그인에 성공했습니다.")
      navigate("/home")
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const { response } = e
        const errorResponse = response?.data as ErrorResponse
        setError(errorResponse)
        const { errorCode } = errorResponse

        if (errorCode) {
          addError("아이디 비밀번호를 확인해 주세요.")
        }
      }
    } finally {
      setIsFetching(false)
    }
  }

  return { fetch, isFetching, error }
}

export default useSignIn
