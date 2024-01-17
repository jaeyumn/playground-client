import axios from "axios"
import { API_SERVER_URL } from "env"

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

export default { basicAxios, authAxios }
