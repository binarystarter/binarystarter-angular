import { IUser } from './IUser';

export interface ISuccessResponse<T> {
  success: true;
  payload: T;
}

export interface IErrorResponse {
  success: false;
  status: number;
  payload: {
    field?: string;
    message: string;
  }[];
}

export type IResponse<T> = ISuccessResponse<T> | IErrorResponse;

export type SuccessMessagePayload = { message: string };
export type CreateDocSuccessPayload<T> = { message: string; doc: T };

/**
 * Response returned by the login action on
 * PayloadCMS
 */
export interface ILoginResponse {
  exp: number;
  token: string;
  user: IUser;
}

export type MeResponse = ILoginResponse | { user: null };
