import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RequestArgs{
  urldata:string,
  method: string
  data?: {},
  token?:string
}

export const createCustomApi =(token?:string)=>{
return createApi({
    reducerPath:"apiData",

  baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      prepareHeaders: (headers, { getState }) => {
   
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        // Don't set Content-Type for FormData, let the browser set it
        return headers;
      },
    }),

endpoints:(builder)=>({

  Data: builder.mutation<any,RequestArgs>({
      query:({urldata,method,data,token}) => ({
       url:urldata,
       method:method,
       body:data,
       headers: token ? { Authorization: `Bearer ${token}` } : {}
        })
    })

})

})

}


export const ApiData = createCustomApi();

export const { useDataMutation } = ApiData;
export default ApiData;