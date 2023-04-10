import { Provider } from "react-redux";
import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/sass/main.scss";
import { store } from "../src/state/store";

import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
