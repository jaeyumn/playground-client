import React from "react"
import { SignUpRequestBody, signUpApi } from "api/member"
import { useNavigate } from "react-router-dom"
import { ErrorResponse } from "api"
import { useAlert } from "hooks/useAlert"
import axios from "axios"

interface Props {
  requestBody: SignUpRequestBody
}

const useSignUp = ({ requestBody }: Props) => {
  const navigate = useNavigate()
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [error, setError] = React.useState<ErrorResponse>()
  const { addSuccess, addError } = useAlert()

  const fetch = async () => {
    try {
      setIsFetching(true)
      await signUpApi(requestBody)
      addSuccess("회원가입에 성공했습니다.")
      navigate("/")
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const { response } = e
        const errorResponse = response?.data as ErrorResponse
        setError(errorResponse)
        const { errorCode } = errorResponse

        if (errorCode) {
          addError("필드값을 확인해 주세요")
        }
      }
    } finally {
      setIsFetching(false)
    }
  }

  return { fetch, isFetching, error }
}

export default useSignUp
