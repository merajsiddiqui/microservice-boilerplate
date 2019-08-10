export interface getUserResponseSuccess {
    id: string;
    email: string;
    name: Name;
    status?: status;
    phoneNumbers: string[];
}
export declare type status = "Happy" | "Sad";
export interface Name {
    first: string;
    last?: string;
}
export interface createUserRequest {
    email: string;
    name: Name;
    phoneNumbers: string[];
}
export interface defaultResponseError {
    error: string;
}
export interface createUserResponseSuccess {
    sucecess: boolean;
    data: createUserRequest;
}
