import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-production.up.railway.app/',
  }),
  tagTypes: ['comments'],
  endpoints: () => ({}),
});
