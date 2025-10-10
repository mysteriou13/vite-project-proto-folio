

export interface LoginRequest {
  name: string;
  password: string;
}

export interface LoginResponse {
  connection: boolean;
  token:string,
  role: string;
}

export interface  InscriptionResponse{
  message:string
}

export interface InscriptionPayload extends LoginRequest{
  role:string
}
