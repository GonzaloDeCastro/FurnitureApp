import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";
import productSlice from "../slices/productsSlice";
import providerSlice from "../slices/providersSlice";

import { uiSlice } from "../slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    providers: providerSlice,
    ui: uiSlice,
  },
});
