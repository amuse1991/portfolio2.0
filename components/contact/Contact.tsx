import React from "react";
import styled from "styled-components";
import Gmap from "./Gmap";
import MessageForm from "./MessageForm";

type TContactProps = {};

const Contact: React.FC<TContactProps> = () => {
  return (
    <Container>
      <Header>Get In Touch</Header>
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

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export default Contact;
