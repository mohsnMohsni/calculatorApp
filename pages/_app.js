import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import store from "reduxApp/store";
import { Provider } from "react-redux";

export default function CaculatorApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={"max-w-sm mx-auto dark"}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
