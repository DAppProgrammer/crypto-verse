import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "Content-Type": "application/json",
  "x-rapidapi-host": "pro-api.coinmarketcap.com/v1",
  "X-CMC_PRO_API_KEY": "f08be416-0cf4-43b9-87a1-320586d84046",
  "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET",
};

const baseUrl = "https://pro-api.coinmarketcap.com/v1";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const coinMarketCapAPI = createApi({
  reducerPath: "coinMarketCapAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/cryptocurrency/listings/latest`),
    }),
  }),
});

export const { useGetCryptosQuery } = coinMarketCapAPI;
