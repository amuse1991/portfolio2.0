import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import modalSlice from "./modules/modal/modal.slice";
import { skillsQuery } from "./modules/skills/skills.query";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [modalSlice.name]: modalSlice.reducer,
      [skillsQuery.reducerPath]: skillsQuery.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(skillsQuery.middleware),

    devTools: true
  });
  setupListeners(store.dispatch);
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
