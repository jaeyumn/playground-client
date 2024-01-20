import { ErrorResponse } from "api"
import { myMemberDetailApi } from "api/member"
import axios from "axios"
import React from "react"
import getMyMemberDetailStore from "store/memberStore"

const useFetchMyMemberDetail = (skip = false) => {
  const { myDetail, setMyDetail } = getMyMemberDetailStore()
  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [error, setError] = React.useState<ErrorResponse>()

  const fetch = async () => {
    try {
      setIsFetching(true)
      const { data: responseBody } = await myMemberDetailApi()
      setMyDetail(responseBody)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const { response } = e
        setError(response?.data as ErrorResponse)
      }
    } finally {
      setIsFetching(false)
    }
  }

  React.useLayoutEffect(() => {
    if (skip) {
      return
    }
    fetch()
  }, [])

  return { myDetail, fetch, isFetching, error }
}

export default useFetchMyMemberDetail
