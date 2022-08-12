import "../styles/globals.css";
import type { AppProps } from "next/app";
import Context, { initState } from '@/context/index'
import { useState } from "react";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const setContext = (params: { key: string, value: any }) => {
    setStore({
      ...store,
      [params.key]: params.value
    })
  }

  const [store, setStore] = useState({
    ...initState,
    setContext
  });

  return (
    <Context.Provider value={store}>
      <Component {...pageProps} setContext={setContext} />
    </Context.Provider>
  );
}

export default MyApp;
