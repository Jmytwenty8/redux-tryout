import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
// import { createLogger } from "redux-logger";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createLogger()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
