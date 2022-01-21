import { apiClient } from "@lib/api/apiClient";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "@store/store";
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
      return action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("===HYDRATE====", action.payload);
      return {
        ...state,
        ...action.payload.skills
      };
    }
  }
});

export const skillsActions = {
  fetchSkillsThunk: (): AppThunk => async (dispatch, getState) => {
    const { data } = await apiClient.get("api/skills");
    console.log("===fetch====", data);
    await dispatch(skillsSlice.actions.setSkills(data));
  }
};
export default skillsSlice;
