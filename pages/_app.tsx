import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@/styles/globalStyle";
import Layout from "@/common/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
