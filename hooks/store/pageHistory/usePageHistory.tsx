import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { TPageHistory } from "@store/modules/pageHistory/pageHistory.types";
import { set } from "@store/modules/pageHistory/pageHistory.slice";
import { AppState } from "@store/store";

// TODO: shallow route 옵션 구현(Component 직접 받도록)
/**
 * @description
 *  현재 dynamic route를 위한 기능만 지원.
 */
const usePageHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isInit, setIsInit] = useState<boolean>(false);
  const historyState = useSelector<AppState, TPageHistory>(
    state => state.pageHistory
  );

  const initFailMsg = `component history state is not initiated. 
  please call initCpHistory function first in your root app component.`;
  /**
   * @description
   * 예상치 못한 컴포넌트에서 history가 초기화되는 것을 방지하기 위해 앱 전체에서 한번만 호출될 수 있음.
   * 일반적으로 root component 가 mount 되었을 때 호출함.
   */
  const initCpHistory = () => {
    if (isInit) {
      return console.error("component history state is already initiated.");
    }
    console.log("----INIT----");
    dispatch(
      set({
        path: router.asPath
      })
    );
    setIsInit(true);
  };
  const setPageHistory = (payload: TPageHistory) => {
    if (!isInit) return console.error(initFailMsg);
    dispatch(set(payload));
  };

  const getPageHistory = useCallback(() => {
    return historyState;
  }, [historyState]);
  return { initCpHistory, setPageHistory, getPageHistory, isInit };
};

export default usePageHistory;
