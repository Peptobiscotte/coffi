import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import Layout from "@/components/layout/layout";
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center"/>  
      </Layout>
    </NextUIProvider>
  );
}
