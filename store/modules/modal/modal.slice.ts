import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TModalState } from "./modal.types";

const modalSlice = createSlice({
  name: "modal",

  initialState: {
    opened: [] as TModalState[]
  },

  reducers: {
    open(state, action: PayloadAction<TModalState>) {
      const modalConfig = action.payload;
      const { type } = modalConfig;
      !state.opened.find(mt => mt.type === type) &&
        state.opened.push(modalConfig);
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
