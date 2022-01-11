import React from "react";
import styled from "styled-components";

type TProejctHeaderProps = {
  children: React.ReactNode;
};

const Container = styled.div``;

const ProjectHeader: React.FC<TProejctHeaderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ProjectHeader;
