import { authAxios } from "api"
import { AxiosResponse } from "axios"

export const SIGN_IN_URI = "/auth/sign-in"

export interface SignInRequestBody {
  username: string
  password: string
}

export const signInApi = async (
  requestBody: SignInRequestBody,
): Promise<AxiosResponse> => {
  return authAxios.post(SIGN_IN_URI, requestBody)
}

export const LOGOUT_URI = "/auth/logout"

export const logoutApi = async (): Promise<AxiosResponse> => {
  return authAxios.post(LOGOUT_URI)
}
