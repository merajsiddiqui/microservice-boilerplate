namespace APIResponse {
  export interface IResponse {
    success: boolean
    error?: IError
    data?: IData
  }

  export interface IError {
    code: string
    message: string
  }

  export interface IData {
    data: object
  }

  export const generateResponse = (res: IError | IData): IResponse => {
    const defaultData: IData = {
      data: {
        message: "This is default API response"
      }
    }
    const response = <IResponse>{}
    response.data = defaultData
    return response
  }
}

export { APIResponse }
