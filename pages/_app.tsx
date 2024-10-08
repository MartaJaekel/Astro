import { AppProps } from "next/app";
import "@/styles/globals.css";
import '@/styles/chart.css';
import React from "react";
import SWRProvider from "@/components/SWRprovider";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  );
}
