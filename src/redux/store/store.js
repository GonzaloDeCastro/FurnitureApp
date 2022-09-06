import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../redux/reducers/authReducer";
import productSlice from "../slices/productsSlice";
import providerSlice from "../slices/providersSlice";
import { uiReducer } from "../../redux/reducers/uiReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    products: productSlice,
    providers: providerSlice,
  },
});
