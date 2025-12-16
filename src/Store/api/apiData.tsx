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
      prepareHeaders: (headers) => {
   
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
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