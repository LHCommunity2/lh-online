import { GlobalStateProvider } from "../Context/GlobalState";
import { EventProvider } from "../Context/EventsProvider";

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
