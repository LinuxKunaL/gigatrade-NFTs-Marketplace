import { configureStore } from "@reduxjs/toolkit";
import {EthAccountStates } from "./ReduxSlices";

const store = configureStore({
  reducer: {
    EthAccountStates: EthAccountStates.reducer,
  },
});

export default store;
