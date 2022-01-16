import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TSkill } from "./skills.types";

const skillsSlice = createSlice({
  name: "skills",

  initialState: [] as TSkill[],

  reducers: {
    fetchSkills(state, action: PayloadAction<TSkill[]>) {
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

export const { fetchSkills } = skillsSlice.actions;
export default skillsSlice;
