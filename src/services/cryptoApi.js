import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '11ed8449fdmsh9ecf4ecc104902dp1f2688jsn5fffbd6fbac5');
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`,
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => `/coin/${coinId}/history?timePeriod=${timePeriod}`,
        }),
        getExchanges: builder.query({
            query: () => `/exchanges`,
        })
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi;
