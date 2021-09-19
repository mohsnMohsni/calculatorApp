import "@styles/globals.css";
import store from "@reduxStore";
import { Provider } from "react-redux";

export default function CaculatorApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
