import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPI";
import { coinMarketCapAPI } from "../services/coinMarketCapAPI";
import { cryptoNewsApi } from "../services/cryptoNewsAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [coinMarketCapAPI.reducerPath]: coinMarketCapAPI.reducer,
  },
});
