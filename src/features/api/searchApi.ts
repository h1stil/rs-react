import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MyCard } from '../../utils/types';

interface ResponseData {
  products: MyCard[];
  limit: number;
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({
    searchUsers: builder.query<MyCard[], string>({
      query: (q, limit = 10) => ({
        url: '/search',
        params: { q, limit },
      }),

      transformResponse: (result: ResponseData) => {
        return result.products;
      },
    }),
  }),
});

export const { useSearchUsersQuery } = searchApi;
