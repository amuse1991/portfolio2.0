import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  TComponentHistory,
  TComponentHistoryState
} from "./componentHistory.types";

const initialState: TComponentHistoryState = {
  current: null,
  prev: null
};

const cpHistorySlice = createSlice({
  name: "componentHistory",
  initialState,
  reducers: {
    set(state, action: PayloadAction<TComponentHistory>) {
      const current = action.payload;
      const newHistory = {
        current,
        prev: state.current
      };
      return newHistory;
    },
    get(state) {
      return state;
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

export const { set, get } = cpHistorySlice.actions;
export default cpHistorySlice;
