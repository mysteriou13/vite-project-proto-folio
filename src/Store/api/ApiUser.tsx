import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { loginData,loginResponse } from '../../Interface/interfaceUse';

export const ApiUser= createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder)=> ({
    loginUser: builder.mutation<loginData,loginResponse>({
        query:(data) => ({
            url:'/user/login',
             method:"POST",
           body:data
        }),

    }),
    
  }),
 
})

export const {useLoginUserMutation} = ApiUser;


export  default ApiUser