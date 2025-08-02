// import { configureStore } from "@reduxjs/toolkit";
// import { authReducer } from "./slices/auth/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
