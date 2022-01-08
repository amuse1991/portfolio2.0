import React, { useEffect } from "react";
import styled from "styled-components";
import modalIndex from "./modal.index";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import lodash from "lodash";

const Container = styled.div``;
function filterInvalidValues(obj: Object) {
  return;
}

export default function ModalManager() {
  const openedModals = useSelector((state: RootState) => state.modal.opened);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  useEffect(() => {
    console.log(openedModals);
  }, [openedModals]);

  return (
    <Container>
      {openedModals.map((modal, idx) => {
        // index 에 지정된 component 정보 가져오기
        const preConfig = modalIndex.find(mi => mi.type === modal.type);
        if (!preConfig || !preConfig.component) {
          console.error("can't find modal component");
          return null;
        }
        const ModalComponent = preConfig.component;

        const { props, options } = modal;

        return (
          <Modal
            key={idx}
            isOpen={true}
            {...(options && lodash.omitBy(options, !lodash.isUndefined))}
          >
            <ModalComponent {...props} />
          </Modal>
        );
      })}
    </Container>
  );
}
