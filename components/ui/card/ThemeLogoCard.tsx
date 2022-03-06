import palette from "@styles/palette";
import styled from "styled-components";
import layout from "@styles/layout";
import { ReactIcon } from "../icons/ReactIcon";
import { arrToLi } from "@lib/listHelper";
import { hexToRgba } from "@lib/hexToRgba";

type ThemeLogoCardProps = {
  themeColor: string;
  IconComponent?: React.ReactElement;
  title?: string;
  description?: string | string[];
};

const ThemeLogoCard: React.FC<ThemeLogoCardProps> = ({
  title,
  description,
  IconComponent,
  themeColor = palette.react
}) => {
  const DescElem = Array.isArray(description) ? (
    <DescriptList themeColor={themeColor}>{arrToLi(description)}</DescriptList>
  ) : (
    description
  );
  return (
    <Container themeColor={themeColor}>
      <Logo themeColor={themeColor}>{IconComponent}</Logo>
      <Title>{title}</Title>
      <Description>{DescElem}</Description>
    </Container>
  );
};

const Container = styled.div<{ themeColor: string }>`
  background: #2b2b2b;
  box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
  border-radius: 0.8rem;
  width: 35.7rem;
  min-height: 30rem;
  max-width: 100%;
  padding: 1.6rem 4.3rem 2.2rem 3.5rem;
  position: relative;
  margin-bottom: 2.7rem;
  margin-right: 1rem;
  margin-left: 1rem;

  &:after {
    content: "";
    background: ${props => props.themeColor || palette.react};
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0;
    left: 0;
    border-radius: 0 0 0.8rem 0.8rem;
  }
`;

const Title = styled.h5`
  padding-bottom: ${layout.large};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;
const Description = styled.span``;
const DescriptList = styled.ul<{ themeColor: string }>`
  position: relative;
  & > li {
    padding-bottom: ${layout.normal};
    &:before {
      content: "▹";
      position: absolute;
      left: -1.5rem;
      color: ${props => props.themeColor};
      /* font-size: 1rem; */
      /* line-height: 12px; */
    }
  }
`;
const Logo = styled.div<{ themeColor: string }>`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.7rem;
  border-radius: 50%;
  background: ${props => `rgba${hexToRgba(props.themeColor, 0.2)}`};
`;

export default ThemeLogoCard;
