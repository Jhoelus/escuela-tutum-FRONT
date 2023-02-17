export interface ResponseBase {
    code: number,
    message: string,
    success: string,
    data: any,
    errors: string[]
}