import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NavDataLink } from '../../../Interface/InterfaceNavmenu';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getNavMenu: builder.query<NavDataLink[], void>({ // on récupère un tableau
      query: () => '/navmenu/readnavmenu', // équivalent de ton fetch
    }),
  }),
});

// Hook généré automatiquement
export const { useGetNavMenuQuery } = api;
export default api;
