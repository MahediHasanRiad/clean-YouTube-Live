import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import Store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>
);
