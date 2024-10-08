interface SuccessResponse<T> {
  success: true
  data: T
}

interface FailResponse {
  message: string
  success: false
  error: string
}

export type ApiResponse<T> = SuccessResponse<T> | FailResponse
