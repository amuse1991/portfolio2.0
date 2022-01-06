import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action, AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./modules/counter/counter.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [counterSlice.name]: counterSlice.reducer
    },
    middleware: [sagaMiddleWare],
    devTools: true
  });

  sagaMiddleWare.run(rootSaga);

  return store;
};

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true
});
