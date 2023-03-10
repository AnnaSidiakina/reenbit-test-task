import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    charactersApi.middleware,
  ],
});

setupListeners(store.dispatch);
