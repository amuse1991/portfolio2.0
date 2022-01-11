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
      !state.opened.find(modal => modal.type === type) &&
        state.opened.push(modalConfig);
    },
    close(state, action: PayloadAction<{ type: string }>) {
      const { type } = action.payload;
      if (type === "*") {
        state.opened = [];
      } else {
        const target = state.opened.find(modal => modal.type === type);
        state.opened = target
          ? state.opened.filter(modal => modal.type !== target.type)
          : state.opened;
      }
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
