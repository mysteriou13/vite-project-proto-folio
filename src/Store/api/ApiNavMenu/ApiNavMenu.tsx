import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NavDataLink } from '../../../Interface/InterfaceNavmenu';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getNavMenu: builder.query<{ data: NavDataLink[] }, void>({
      query: () => '/navmenu/readnavmenu',
    }),
  }),
});

// Hook généré automatiquement
export const { useGetNavMenuQuery } = api;
export default api;
