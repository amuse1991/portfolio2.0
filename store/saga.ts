import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, delay, put, spawn } from "redux-saga/effects";
import skillsSaga from "./modules/skills/skills.saga";

export default function* rootSaga() {
  const sagas = [skillsSaga] as any[];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
