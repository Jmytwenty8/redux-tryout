const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
const { createLogger } = require("redux-logger");
const userReducer = require("../features/user/userSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
});

module.exports = store;
