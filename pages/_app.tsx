import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/sass/main.scss";
import { store } from "../src/state/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
