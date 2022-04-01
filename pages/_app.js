import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weather APP from D.G.</title>
        <meta
          name="description"
          content="This App was created by D. Goergens and displays actual Weather from all over the World"
        />
        <link rel="icon" href="/D.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
