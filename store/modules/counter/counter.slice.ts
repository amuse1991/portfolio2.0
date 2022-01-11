import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import TCounterState from "./counter.types";

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
    },
    increment: {
      reducer: (state: Draft<TCounterState>) => {
        state.value++;
      },
      prepare: (value: TCounterState) => ({ payload: value })
    },
    decrement: (state: Draft<TCounterState>) => {
      state.value--;
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

export const { incrementByAmount, increment, decrement } = counterSlice.actions;
export default counterSlice;
