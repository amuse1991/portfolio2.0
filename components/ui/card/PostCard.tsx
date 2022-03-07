import { Codesandbox, Github } from "@icons-pack/react-simple-icons";
import { TProject } from "@src/types/project";
import { TPost } from "@store/modules/post/post.types";
import palette from "@styles/palette";
import styled from "styled-components";
import ExternalLinkIcon from "../icons/ExtrenalLinkIcon";
import ProjectFileIcon from "../icons/ProjectFileIcon";

type TPostCardProps = {
  post: TPost;
};

const PostCard: React.FC<TPostCardProps> = ({ post }) => {
  const { title } = post;

  return (
    <Container>
      <Header>
        <Icons>
          <Category>JAVASCRIPT</Category>
        </Icons>
        <Title>{title}</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          dolores consequatur ex quibusdam quam aliquid sunt esse soluta ad
          officiis facere, exercitationem corrupti ipsum nulla sed facilis
          commodi architecto magni.
        </Description>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${palette.blue_azure};
  margin: 2rem;
  height: 300px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  transition: transform 200ms ease-in-out;
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.span``;

const LinkIcons = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  & > * {
    margin-left: 0.8rem;
    cursor: pointer;
    & :hover {
      fill: ${palette.blue_azure};
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: ${palette.white_snow};
  z-index: 1;
  width: 100%;
  cursor: pointer;
`;

const Description = styled.p`
  color: ${palette.gray};
`;

export default PostCard;
