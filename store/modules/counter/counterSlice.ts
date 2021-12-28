import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const counterSlice = createSlice({
  name: "counter",

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.subject
      };
    }
  }
});

export default counterSlice;
