export interface AuthResponse {
  expiresIn: string
  accessToken: string
  user: UserResponse
}

export interface UserResponse {
  badgeNumber: string
  firstName: string
  lastName: string
  email: string
  id: string
  matrixId: string
  matrixToken: string
}
