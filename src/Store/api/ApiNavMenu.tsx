import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import  { NavDataLink,AddNavLinkArgs } from '../../Interface/InterfaceNavmenu';

export const ApiNavMenu= createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['NavMenu'], // pour le cache/invalidation
  endpoints: (builder) => ({
    // to retrieve the nav menus
    getNavMenu: builder.query<{ data: NavDataLink[] }, void>({
      query: () => '/navmenu/readnavmenu',
      providesTags: ['NavMenu'], // permet de mettre à jour le cache après POST
    }),

    // add nav link
addNavLink: builder.mutation<NavDataLink, AddNavLinkArgs>({
  query: ({ dataform, token }) => ({
    url: '/navmenu/addnavmenu',
    method: 'POST',
    body: dataform,
    headers: {
      Authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json',
    },
  }),
  invalidatesTags: ['NavMenu'],
}),

//UpdataNavLink
UpdateNavLink: builder.mutation<NavDataLink,AddNavLinkArgs>({
  query: ({ dataform, token }) => ({
    url:'/navmenu/updatenavmenu',
    method:'PUT',
    body:dataform,
        headers: {
      Authorization: `Bearer ${token}`, // 👈 ajouter 'Bearer '
      'Content-Type': 'application/json',
    },
    

  })

})

  }),
});


export const { useGetNavMenuQuery, useAddNavLinkMutation,useUpdateNavLinkMutation } = ApiNavMenu;
export default ApiNavMenu;
