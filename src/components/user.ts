export interface getUserResponseSuccess {
  id: string
  email: string
  name: Name
  status?: status
  phoneNumbers: string[]
}

export type status = "Happy" | "Sad"

export interface Name {
  first: string
  last?: string
}

export interface createUserRequest {
  email: string
  name: Name
  phoneNumbers: string[]
}

export interface defaultResponseError {
  error: string
}

export interface createUserResponseSuccess {
  sucecess: boolean
  data: createUserRequest
}

export interface updateUserRequestBody {
  id: string
  email: string
}

export interface updateUserResponse {
  success: boolean
  data: updateUserRequestBody
  userId: number
}
