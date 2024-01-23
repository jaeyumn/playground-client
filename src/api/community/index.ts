// REQUEST

import { Category } from "_types/community"
import { authAxios } from "api"
import { AxiosResponse } from "axios"

// RESPONSE
export interface FindCategoriesResponseBody {
  titles: Array<Category>
}

// API
export const findCategoriesApi = (): Promise<
  AxiosResponse<FindCategoriesResponseBody>
> => {
  return authAxios.get("/categories")
}
