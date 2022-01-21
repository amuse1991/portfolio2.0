import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./modules/counter/counter.slice";
import modalSlice from "./modules/modal/modal.slice";
import skillsSlice from "./modules/skills/skills.slice";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [skillsSlice.name]: skillsSlice.reducer
    },
    devTools: true
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true
});
