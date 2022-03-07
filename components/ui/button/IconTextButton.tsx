import { hexToRgba } from "@lib/hexToRgba";
import { animated, useSpring } from "@react-spring/web";
import palette from "@styles/palette";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import ResumeIcon from "../icons/ResumeIcon";

type TIconTextButtonProps = {
  iconPath?: string;
  IconComponent?: React.ReactElement;
  text?: string;
};
const IconTextButton: React.FC<TIconTextButtonProps> = ({
  iconPath,
  IconComponent,
  text,
  ...props
}) => {
  return (
    <Container {...props}>
      <IconContainer>{IconComponent}</IconContainer>
      <Link>{text}</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${palette.blue_azure};
  padding: 0.6rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    background: ${`rgba${hexToRgba(palette.blue_azure, 0.2)}`};
  }
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  & :hover {
    & > svg {
      fill: ${palette.blue_azure};
    }
  }
`;
const Link = styled.a`
  color: ${palette.blue_azure};
`;

export default IconTextButton;
