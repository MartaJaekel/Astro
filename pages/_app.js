import "@/styles/globals.css";
import React from "react";
// import signs from "../lib/data.js";
import SWRProvider from "@/components/SWRprovider.js";

export default function App({ Component, pageProps }) {
  return (
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  );
}
