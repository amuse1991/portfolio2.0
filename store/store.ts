import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./modules/counter/counter.slice";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./saga";
import modalSlice from "./modules/modal/modal.slice";
import skillsSlice from "./modules/skills/skills.slice";
import thunkMiddleware from "redux-thunk";

export interface SagaStore extends Store {
  sagaTask: Task;
}

const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [skillsSlice.name]: skillsSlice.reducer
    },
    middleware: [sagaMiddleWare, thunkMiddleware],
    devTools: true
  });

  (store as SagaStore).sagaTask = sagaMiddleWare.run(rootSaga);
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

export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: true
});
