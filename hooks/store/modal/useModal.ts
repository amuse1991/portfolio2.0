import { TModalState } from "@store/modules/modal/modal.types";
import { useDispatch } from "react-redux";
import { open, close } from "@store/modules/modal/modal.slice";
import { useCallback, useState } from "react";

export default function useModal() {
  const dispatch = useDispatch();
  const openModal = (payload: TModalState) => {
    dispatch(open(payload));
  };

  const closeModal = (timeout: number = 0) => {
    setTimeout(() => {
      dispatch(close());
    }, timeout);
  };

  return { openModal, closeModal };
}
