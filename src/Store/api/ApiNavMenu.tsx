import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NavDataLink } from '../../Interface/InterfaceNavmenu';

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
    addNavLink: builder.mutation<NavDataLink, Partial<NavDataLink>>({
      query: (newLink) => ({
        url: '/navmenu/addnavmenu',
        method: 'POST',
        body: newLink,
      }),
      invalidatesTags: ['NavMenu'], // re-fetch automatique après ajout
    }),
  }),
});


export const { useGetNavMenuQuery, useAddNavLinkMutation } = ApiNavMenu;
export default ApiNavMenu;
