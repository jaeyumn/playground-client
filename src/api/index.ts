import axios, {
  AxiosResponse,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders,
} from "axios"
import { API_SERVER_URL } from "env"
import mem from "mem"
import { getAlertStore } from "store/alertStore"
import { getTokenStore } from "store/tokenStore"

export interface ErrorResponse {
  errorCode: string
  errorDescription: string
}

export const basicAxios = axios.create({
  baseURL: `${API_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export const authAxios = axios.create({
  baseURL: `${API_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

const BEARER_TYPE = "Bearer "

const parseToken = async (
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
) => {
  const authHeader: string = headers.authorization
  if (!!authHeader && authHeader.startsWith(BEARER_TYPE)) {
    const accessToken = authHeader.substring(BEARER_TYPE.length)
    getTokenStore.getState().setToken(accessToken)
  }
}

const reissue = mem(
  async () => {
    const { headers: responseHeaders } =
      await basicAxios.post("/api/auth/reissue")
    await parseToken(responseHeaders)
  },
  { maxAge: 1000 },
)

const onSuccess = (res: AxiosResponse) => {
  const { headers } = res
  parseToken(headers)
  return res
}

basicAxios.interceptors.response.use(onSuccess)

authAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { headers } = config
  if (getTokenStore.getState().token) {
    headers.Authorization = BEARER_TYPE + getTokenStore.getState().token
  }
  return config
})

authAxios.interceptors.response.use(onSuccess, async err => {
  if (
    axios.isAxiosError<ErrorResponse>(err) &&
    err.response &&
    err.response.status === 401 &&
    err.config
  ) {
    const { config } = err
    const { headers: configHeaders } = config
    try {
      await reissue()
      configHeaders.Authorization = BEARER_TYPE + getTokenStore.getState().token
      return basicAxios.request(config)
    } catch (e) {
      getAlertStore.getState().setAlertProps({
        children: "로그인이 필요한 서비스입니다.",
        handleConfirm: () => {
          getTokenStore.getState().clear()
          location.href = "/sign-in"
        },
      })
      return Promise.reject(e)
    }
  }
  return Promise.reject(err)
})

export default { basicAxios, authAxios }
