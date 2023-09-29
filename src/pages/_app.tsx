import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/nav-bar";
import Head from "next/head";
import Layout from "~/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex h-screen w-screen">
      <Head>
        <title>Atin Agnihotri</title>
        <meta name="description" content="Atin Agnihotri's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default api.withTRPC(MyApp);
