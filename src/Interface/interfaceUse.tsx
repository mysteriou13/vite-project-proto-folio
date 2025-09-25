export interface LoginRequest {
  name: string;
  password: string;
}

export interface LoginResponse {
  connection: boolean;
  role: string;
}



export interface  InscriptionResponse{
  message:string
}

export interface InscriptionPayload {
  name:string,
  password:string
  role:string
}
