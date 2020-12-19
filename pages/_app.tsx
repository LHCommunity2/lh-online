import { GlobalStateProvider } from "../Context/GlobalState";
import { EventProvider } from "../Context/EventsProvider";
import { GlobalStyle } from "../styles";
import { DarkTheme } from "../components";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <EventProvider>
        <DarkTheme />
        <GlobalStyle />
        <Component {...pageProps} />
      </EventProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
