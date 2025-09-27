import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./i18n"; // 👈 i18n
import store from "./store";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
