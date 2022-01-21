import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { TSkill } from "./skills.types";

const initialState = [] as TSkill[];

const skillsSlice = createSlice({
  name: "skills",

  initialState,

  reducers: {
    setSkills: (state, action: PayloadAction<TSkill[]>) => {
      console.log(action.payload);
      state = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.skills
      };
    }
  }
});

export const skillsActions = skillsSlice.actions;
export default skillsSlice;
