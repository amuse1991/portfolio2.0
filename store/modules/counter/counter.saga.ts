import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import TCounterState from "./counter.model";
import { increment } from "./counter.slice";

function* incrementSaga(action: PayloadAction<TCounterState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

export function* counterSaga() {
  yield takeEvery(increment.type, incrementSaga);
}
