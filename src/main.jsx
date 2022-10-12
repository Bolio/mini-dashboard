import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import configureStore from "./redux/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
