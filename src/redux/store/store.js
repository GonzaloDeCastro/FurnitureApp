import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/authSlice";
import { uiSlice } from "../slices/uiSlice";
import productSlice from "../slices/productsSlice";
import providerSlice from "../slices/providersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    providers: providerSlice,
    ui: uiSlice,
  },
});
