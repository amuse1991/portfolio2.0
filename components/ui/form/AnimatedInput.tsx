import { animated } from "@react-spring/web";
import palette from "@styles/palette";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState
} from "react";
import { easings, useSpring } from "react-spring";
import useMeasure from "react-use-measure";
import styled, { css } from "styled-components";

type TAnimatedInputProps = {
  inputAttr: InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>;
  className?: string;
  required?: boolean;
};

const AnimatedInput: React.FC<TAnimatedInputProps> = ({
  inputAttr,
  className,
  required = false,
  ...props
}) => {
  const [inputRef, { width: inputWidth }] = useMeasure();
  const labelAnimationFrom = {
    labelWidth: 0,
    labelOpacity: 0
  };
  const labelAnimationTo = { labelWidth: inputWidth, labelOpacity: 1 };

  const [{ labelWidth, labelOpacity }, api] = useSpring(
    () => labelAnimationFrom
  );
  const onFocus = () => {
    api.start({ to: labelAnimationTo, config: { duration: 500 } });
  };
  const onBlur = () => {
    api.start(labelAnimationFrom);
  };

  return (
    <Container {...props} className={className}>
      {inputAttr?.type === "textarea" ? (
        <TextArea
          ref={inputRef}
          {...inputAttr}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <Input
          ref={inputRef}
          {...inputAttr}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {/* @ts-ignore */}
      <Label
        type={inputAttr?.type || ""}
        style={{ width: labelWidth, opacity: labelOpacity }}
      />
    </Container>
  );
};

const Container = styled(animated.div)`
  & > textarea,
  input {
    background: ${palette.charcoal};
    color: ${palette.gray};
    font-size: 1rem;
    border: 0;
    ::placeholder {
      text-indent: 0.5rem;
    }
    :focus {
      outline: none;
    }
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
`;
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  overflow: visible;
`;
const Label = styled(animated.label)<{ type?: string }>`
  width: 100%;
  border: 1px solid ${palette.blue_azure};
  display: block;
  ${props =>
    props.type === "textarea" &&
    css`
      transform: translate3d(0, -4px, 0) !important;
    `}
`;

export default AnimatedInput;
