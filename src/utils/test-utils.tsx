import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from "../app/store";

let persistor = persistStore(store);

export const renderWithProviders = (children: ReactNode): RenderResult => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </BrowserRouter>,
  )
};