import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./store/store";
import { ModalContextProvider } from "./context/modal/modal.context";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
