import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  get,
  set
} from "@store/modules/componentHistory/componentHistory.slice";
import { useRouter } from "next/router";
import { TComponentHistory } from "@store/modules/componentHistory/componentHistory.types";

// TODO: shallow route 옵션 구현(Component 직접 받도록)
/**
 * @description
 *  현재 dynamic route를 위한 기능만 지원.
 */
const useComponentHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isInit, setIsInit] = useState<boolean>(false);

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
    const newHistory: TComponentHistory = {
      path: router.asPath,
      prev: undefined
    };
    console.log("----INIT----");
    dispatch(set(newHistory));
    setIsInit(true);
  };
  const setCpHistory = (payload: TComponentHistory) => {
    if (!isInit) return console.error(initFailMsg);
    dispatch(set(payload));
  };
  const getCpHistory = () => {
    if (!isInit) return console.error(initFailMsg);
    const history = dispatch(get());
    return history;
  };
  return { initCpHistory, setCpHistory, getCpHistory, isInit };
};

export default useComponentHistory;
