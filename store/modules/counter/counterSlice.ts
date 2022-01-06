import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

type TCounterState = {
  count: number;
};

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 1
  } as TCounterState,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.count
      };
    }
  }
});

export const { incrementByAmount } = counterSlice.actions;
export default counterSlice;
