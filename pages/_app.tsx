import { GlobalStateProvider } from "../Context/GlobalState";
import { EventProvider } from "../Context/EventsProvider";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <EventProvider>
        <Component {...pageProps} />
      </EventProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
