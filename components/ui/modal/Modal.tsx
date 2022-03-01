import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import modalIndex from "./modal.index";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import lodash from "lodash";
import palette from "@styles/palette";
import Image from "next/image";
import useModal from "@hooks/store/modal/useModal";
import { nanoid } from "@reduxjs/toolkit";
import { AppState } from "@store/store";

import * as R from "ramda";
import { TModalState } from "@store/modules/modal/modal.types";

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  inset: 0;
  width: 100%;
  background: ${palette.black_denim};
`;
const CloseButton = styled.div`
  cursor: pointer;
`;

export default function ModalManager() {
  const modalState = useSelector((state: AppState) => state.modal);
  const { visible, modal } = modalState;
  const { closeModal } = useModal();
  const contentDOMRef = useRef<HTMLDivElement>();
  const overlayDOMRef = useRef<HTMLDivElement>();

  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);

  const onClose = () => {
    contentDOMRef.current?.classList.add("modal-content-before-close");
    overlayDOMRef.current?.classList.add("modal-overlay-before-close");
    closeModal(500);
  };

  if (!modal) return <></>;
  const { type, props, options } = modal as TModalState;
  const preConfig = modalIndex.find(mi => mi.type === type);
  if (!preConfig || !preConfig.component) {
    console.error("can't find modal component");
    return null;
  }
  const ModalComponent = preConfig.component;

  const modalStyle = options?.modalStyle
    ? options.modalStyle
    : {
        content: {
          background: palette.black_denim,
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          borderRadius: "10px"
        }
      };

  return (
    <ReactModal
      closeTimeoutMS={500}
      key={nanoid()}
      isOpen={visible}
      style={modalStyle}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      onRequestClose={onClose}
      {...(options && lodash.omitBy(options, !lodash.isUndefined))}
      contentRef={node => (contentDOMRef.current = node)}
      overlayRef={node => (overlayDOMRef.current = node)}
    >
      {options?.withHeader && (
        <Header>
          <CloseButton onClick={onClose}>
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
    </ReactModal>
  );
}
