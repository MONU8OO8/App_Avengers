"use client";

import { store } from "./Redux";
import { Provider } from "react-redux";
import Theme from "./Components/Theme";
import StyledComponentsRegistry from "./Registry";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
export const persistor = persistStore(store);

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
