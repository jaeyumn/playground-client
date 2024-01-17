import { basicAxios } from "api"
import { AxiosResponse } from "axios"

// REQUEST
export interface SignUpRequestBody {
  username: string
  password: string
  nickname: string
  name: string
  email: string
}

export interface AddEmailRequestBody {
  email: string
}

export interface SendVerificationEmailRequestBody {
  email: string
}

export interface VerificationEmailCodeRequestBody {
  email: string
  code: string
}

// RESPONSE

// API
export const signUpApi = async (
  requestBody: SignUpRequestBody,
): Promise<AxiosResponse> => {
  return basicAxios.post("/members/sign-up", requestBody)
}

export const addEmailApi = async (
  requestBody: AddEmailRequestBody,
): Promise<AxiosResponse> => {
  return basicAxios.post("/members/me/emails", requestBody)
}

export const sendVerificationEmailApi = async (
  requestBody: SendVerificationEmailRequestBody,
): Promise<AxiosResponse> => {
  return basicAxios.post("/emails/verification/send", requestBody)
}

export const verificationEamilApi = async (
  requestBody: VerificationEmailCodeRequestBody,
): Promise<AxiosResponse> => {
  return basicAxios.post("/emails/verification/check", requestBody)
}
