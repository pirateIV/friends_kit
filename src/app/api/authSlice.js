import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        // loca
      }
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // endpoint to fetch user details
    getUserDetails: builder.query({
      query: 'user',
    }),
  }),
});

// Export hooks for usage in functional components
export const { useLoginMutation } = authApi;

export const selectCurrentUser = (state) => state.auth.user;
