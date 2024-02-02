// store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import fullScreenReducer from "./fullScreenSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    fullScreen: fullScreenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
