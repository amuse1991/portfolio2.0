import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import modalSlice from "./modules/modal/modal.slice";
import { skillsQuery } from "./modules/skills/skills.query";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { projectQuery } from "./modules/project/project.query";
import { careerQuery } from "./modules/career/career.query";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [modalSlice.name]: modalSlice.reducer,
      [skillsQuery.reducerPath]: skillsQuery.reducer,
      [projectQuery.reducerPath]: projectQuery.reducer,
      [careerQuery.reducerPath]: careerQuery.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(skillsQuery.middleware)
        .concat(projectQuery.middleware)
        .concat(careerQuery.middleware),

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
