import { apiClient } from "@lib/api/apiClient";
import skillsApi from "@pages/api/skills";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { NextApiResponse } from "next";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import skillsSlice from "./skills.slice";
import { TSkill } from "./skills.types";

export function* handleFetchSkillsAction(action?: PayloadAction<TSkill[]>) {
  try {
    const { data }: AxiosResponse = yield call(apiClient, "api/skills");
    yield put({ type: "SUCCESS", payload: data });
  } catch (err) {
    console.error(err);
    yield put({ type: "ERROR", payload: err });
  }
}
/**
 * SEARCH DISPATH EVENT WATCH
 * dispatch 이벤트가 감지되었을때 동작한다.
 */
export default function* skillsSaga() {
  yield all([
    takeLatest(skillsSlice.actions.fetchSkills.name, handleFetchSkillsAction)
  ]);
}
