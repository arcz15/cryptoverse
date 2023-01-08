import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-BingApis-SDK', 'true');
            headers.set('X-RapidAPI-Key', '11ed8449fdmsh9ecf4ecc104902dp1f2688jsn5fffbd6fbac5');
            headers.set('X-RapidAPI-Host', 'bing-news-search1.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
