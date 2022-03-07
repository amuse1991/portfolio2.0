import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "@src/types/util";
import { HYDRATE } from "next-redux-wrapper";
import { TModalState } from "./modal.types";
import modalIndex from "@components/ui/modal/modal.index";
import palette from "@styles/palette";

const getModalComponent = (type: string) => {};

const modalSlice = createSlice({
  name: "modal",

  initialState: {
    modal: null as Nullable<TModalState>,
    visible: false
  },

  reducers: {
    open(state, action: PayloadAction<TModalState>) {
      const modalConfig = action.payload;
      const { type, options, props } = modalConfig;
      return {
        modal: {
          type,
          props,
          options
        },
        visible: true
      };
    },
    close(state) {
      state.modal = null;
      state.visible = false;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.modal
      };
    }
  }
});

export const { open, close } = modalSlice.actions;
export default modalSlice;
