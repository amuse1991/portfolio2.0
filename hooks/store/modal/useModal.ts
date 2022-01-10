import { TModalState } from "@store/modules/modal/modal.types";
import { useDispatch } from "react-redux";
import { open, close } from "@store/modules/modal/modal.slice";

export default function useModal() {
  const dispatch = useDispatch();
  const openModal = (payload: TModalState) => {
    dispatch(open(payload));
  };
  const closeModal = (modalType: string) => {
    dispatch(close({ type: modalType }));
  };
  const closeAllModal = () => {
    dispatch(close({ type: "*" }));
  };
  return { openModal, closeModal };
}
