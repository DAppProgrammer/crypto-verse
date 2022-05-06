import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/coinMarketCapAPI";
import Loader from "./Loader";

function CoinsList() {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data);

  if (isFetching) return <Loader />;
  console.log(cryptos);

  return <div>CoinsList</div>;
}

export default CoinsList;
