import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersSlice";
import { googleAuthReducer } from "./auth/auth";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, googleAuthReducer);
export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    auth: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(charactersApi.middleware),
});
export const persistor = persistStore(store);
