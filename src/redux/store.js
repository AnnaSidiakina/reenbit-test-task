import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersSlice";
import { googleAuthReducer } from "./auth/auth";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    auth: googleAuthReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    charactersApi.middleware,
  ],
});

setupListeners(store.dispatch);
