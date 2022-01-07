import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TModalState } from "./modal.types";

const modalSlice = createSlice({
  name: "modal",

  initialState: [] as TModalState[],

  reducers: {
    open(state, action: PayloadAction<TModalState>) {
      const { payload } = action;
    },
    close(state, action: PayloadAction<number>) {
      // state.count += action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.modal
      };
    }
  }
});

export const { open, close } = modalSlice.actions;
export default modalSlice;
