import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Noticies } from './types'

export const noticiesApi = createApi({
  reducerPath: 'noticiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hn.algolia.com/api/v1/' }),
  endpoints: (builder) => ({
    getNoticiesByName: builder.query<Noticies, string>({
      query: (name) => `search?query=${name}`,
    }),
  }),
})

export const { useGetNoticiesByNameQuery } = noticiesApi
