import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCredentials, logout } from '@/auth/reducers/login/loginSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/users',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
  },
});
