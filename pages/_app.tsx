import { GlobalStateProvider } from "../Context/GlobalState";
import { EventProvider } from "../Context/EventsProvider";
import { GlobalStyle } from "../styles";
import Head from "next/head";
import { DarkTheme } from "../components";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <link rel="shortcut icon" href="/image/favicon.ico" />
        </Head>
      </div>
      <GlobalStateProvider>
        <EventProvider>
          <DarkTheme />
          <GlobalStyle />
          <Component {...pageProps} />
        </EventProvider>
      </GlobalStateProvider>
    </>
  );
}

export default MyApp;
