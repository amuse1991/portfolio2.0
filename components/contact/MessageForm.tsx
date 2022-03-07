import Header from "@components/layout/Header";
import IconTextButton from "@components/ui/button/IconTextButton";
import AnimatedInput from "@components/ui/form/AnimatedInput";
import SendMessageIcon from "@components/ui/icons/SendMessageIcon";
import palette from "@styles/palette";
import styled from "styled-components";

const MessageForm: React.FC = () => {
  return (
    <Container>
      <SHeader title={"Contact Me"} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
        placeat dolor ea? Impedit cum quidem minima eligendi? Quidem reiciendis
        doloremque est? Quod quae officiis, illum necessitatibus ipsa asperiores
        deserunt.
      </Text>
      <Form>
        <StyledInput inputAttr={{ placeholder: "Name", type: "text" }} />
        <StyledInput
          inputAttr={{ placeholder: "Email", type: "email" }}
          required
        />
        <StyledInput inputAttr={{ placeholder: "Subject", type: "text" }} />
        <StyledInput inputAttr={{ placeholder: "Message", type: "textarea" }} />
      </Form>
      <SIconTextButton
        text="Send Message !"
        IconComponent={
          <SendMessageIcon width={32} height={32} fill={palette.blue_azure} />
        }
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
        placeat dolor ea? Impedit cum quidem minima eligendi? Quidem reiciendis
        doloremque est? Quod quae officiis, illum necessitatibus ipsa asperiores
        deserunt.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
  margin: 0 2rem;
`;

const SHeader = styled(Header)`
  padding: 0;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  & > div {
    margin-top: 1rem;
  }
  div:nth-child(1) {
    margin-right: 1rem;
  }
  div:nth-child(1),
  div:nth-child(2) {
    flex: 1 1 calc(50% - 1rem);
  }
  div:nth-child(3),
  div:nth-child(4) {
    flex: 1 1 100%;
  }
`;

// const Header = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 1.5rem;
// `;

const Text = styled.p`
  color: ${palette.gray};
  margin: 2rem 0;
`;

const StyledInput = styled(AnimatedInput)`
  width: 150px;
`;

const SIconTextButton = styled(IconTextButton)`
  margin: 1rem 0;
  margin-left: auto;
  width: 13rem;
`;

export default MessageForm;
