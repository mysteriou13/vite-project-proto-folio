import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { loginData,loginResponse } from '../../Interface/interfaceUse';

interface  InscriptionResponse{
  message:string
}

interface InscriptionPayload {
  name:string,
  password:string
  role:string
}


export const ApiUser= createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder)=> ({
    loginUser: builder.mutation<loginData,Partial<loginResponse> >({
        query:(data) => ({
            url:'/user/login',
             method:"POST",
           body:data
        }),

        

    }),

    InscriptionUser:builder.mutation<InscriptionResponse,InscriptionPayload>({
      query:(data) => ({

        url:'/user/inscription',
         method:"POST",
         body:data,
      })
    })
    
  }),
 
})

export const {useLoginUserMutation,useInscriptionUserMutation} = ApiUser;


export  default ApiUser