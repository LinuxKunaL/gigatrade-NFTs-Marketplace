import { createSlice } from "@reduxjs/toolkit";

export const EthAccountStates = createSlice({
  initialState: {
    isConnect: false,
    account: "",
    balance: "",
    userName: "",
    userAvatar: "",
  },
  name: "EthAccountStates",
  reducers: {
    setEthAccount: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setEthAccount } = EthAccountStates.actions;
