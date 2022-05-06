import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "c3a3ee125bmsh2bed43ab9e30123p12296ejsn86a13896650a",
  // "x-rapidapi-key": "8919533329msh3262273c688cf52p1dae51jsn8d1489edb45c",
  // coin market cap key: f08be416-0cf4-43b9-87a1-320586d84046
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: (coinId, timePeriod) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
