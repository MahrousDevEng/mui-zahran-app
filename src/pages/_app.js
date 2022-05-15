// Main Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// Redux
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
// Components
import Loading from "../components/other/Loading";
import Layout from "../modules/layout/Layout";
// Styles
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  useEffect(() => {
    document.querySelector("html").dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  return (
    <>
      <Head>
        <title>Zahran Market</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/assets/images/icon.webp" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Layout locale={locale}>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
