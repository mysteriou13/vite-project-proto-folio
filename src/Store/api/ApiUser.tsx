import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiUser= createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder)=> ({
    loginUser: builder.mutation({
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