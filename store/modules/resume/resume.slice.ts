import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TResume } from "./resume.types";

const resumeSlice = createSlice({
  name: "resume",

  initialState: {
    data: [] as TResume[]
  },

  reducers: {},

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.resume
      };
    }
  }
});

export const {} = resumeSlice.actions;
export default resumeSlice;
