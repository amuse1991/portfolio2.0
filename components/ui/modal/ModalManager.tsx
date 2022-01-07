import React from "react";
import styled from "styled-components";
import modalConfigs from "./modal.config";
import Modal from "react-modal";

const Container = styled.div``;

export default function ModalManager() {
  Modal.setAppElement("#__next");
  return (
    <Container>
      {modalConfigs.map((config, idx) => {
        const Component = config.component;
        return (
          <Modal key={idx} isOpen={false}>
            <Component />
          </Modal>
        );
      })}
    </Container>
  );
}
