import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { LoginRequest,LoginResponse,InscriptionResponse,InscriptionPayload } from '../../Interface/interfaceUse';


export const ApiUser= createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder)=> ({
    loginUser: builder.mutation<LoginResponse,LoginRequest> ({
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