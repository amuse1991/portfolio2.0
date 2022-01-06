import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./modules/counter/counterSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;
export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: true
});