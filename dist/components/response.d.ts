declare namespace APIResponse {
    interface IResponse {
        success: boolean;
        error?: IError;
        data?: IData;
    }
    interface IError {
        code: string;
        message: string;
    }
    interface IData {
        data: object;
    }
    const generateResponse: (res: IError | IData) => IResponse;
}
export { APIResponse };
