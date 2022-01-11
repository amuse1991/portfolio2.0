import React, { useEffect } from "react";
import styled from "styled-components";
import modalIndex from "./modal.index";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import lodash from "lodash";
import palette from "@styles/palette";
import Image from "next/image";
import useModal from "@hooks/store/modal/useModal";

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  inset: 0;
  width: 100%;
  background: ${palette.black_denim};
`;
const CloseButton = styled.div``;

export default function ModalManager() {
  const openedModals = useSelector((state: RootState) => state.modal.opened);
  const { closeModal } = useModal();

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

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

        const { props, options, type } = modal;
        const modalStyle = {
          content: options?.modalStyle
            ? options?.modalStyle
            : {
                width: "90%",
                height: "90%",
                background: palette.black_denim,
                top: "52%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }
        };

        return (
          <Modal
            key={idx}
            isOpen={true}
            style={modalStyle}
            shouldCloseOnOverlayClick={true}
            preventScroll={true}
            onRequestClose={() => {
              // shouldClosOnOverlayClick is depends on onRequestClose
              closeModal(type);
            }}
            {...(options && lodash.omitBy(options, !lodash.isUndefined))}
          >
            {options?.withHeader && (
              <Header>
                <CloseButton
                  onClick={() => {
                    closeModal(type);
                  }}
                >
                  <Image
                    src={"/image/icons/close_black_48dp.svg"}
                    alt="close button"
                    width="20px"
                    height="20px"
                  />
                </CloseButton>
              </Header>
            )}
            <ModalComponent {...props} />
          </Modal>
        );
      })}
    </Container>
  );
}
