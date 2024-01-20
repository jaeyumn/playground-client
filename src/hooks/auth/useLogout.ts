import { ErrorResponse } from "api"
import { logoutApi } from "api/auth"
import axios from "axios"
import { useAlert } from "hooks/useAlert"
import React from "react"
import { getTokenStore } from "store/tokenStore"

const useLogout = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [error, setError] = React.useState<ErrorResponse>()
  const { addSuccess } = useAlert()

  const { clear: clearToken } = getTokenStore()

  const fetch = async (callback?: () => void) => {
    try {
      setIsFetching(true)
      await logoutApi()
      clearToken()
      addSuccess("로그아웃 되었습니다.")
      if (callback) {
        callback()
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const { response } = e
        setError(response?.data as ErrorResponse)
      }
    } finally {
      setIsFetching(false)
    }
  }

  return { fetch, isFetching, error }
}

export default useLogout
