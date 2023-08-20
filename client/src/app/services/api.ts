import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:2005/api'
});

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3});

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})