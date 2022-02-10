import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TPageHistory } from "./pageHistory.types";

const initialState: TPageHistory = {
  path: "NOT_INITIATED",
  prev: "NOT_INITIATED"
};

const cpHistorySlice = createSlice({
  name: "pageHistory",
  initialState,
  reducers: {
    set(state, action: PayloadAction<TPageHistory>) {
      const current = action.payload;

      if (current.path === state.path) {
        return state;
      }
      const newHistory = {
        path: current.path,
        prev: state.path
      };
      return newHistory;
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

export const { set } = cpHistorySlice.actions;
export default cpHistorySlice;
