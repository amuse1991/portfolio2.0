import React from "react";
import styled from "styled-components";
import Gmap from "./Gmap";
import MessageForm from "./MessageForm";

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
  return (
    <Container>
      <Section>
        <MessageForm />
      </Section>
      <Section className="map">
        <Gmap />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }
`;
const Section = styled.div`
  &.map {
    overflow: hidden;
  }
`;

export default Contact;
