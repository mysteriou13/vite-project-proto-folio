import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ApiContact = createApi({
    reducerPath:"api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
endpoints:(builder)=>({

    Contact: builder.mutation({
      query:(data) => ({
       url:"/Contact/AddContact",
       method:"POST",
       body:data
        })
    })

})
  

})

export const{useContactMutation} = ApiContact

export default  ApiContact