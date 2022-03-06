import { animated, useSpring } from "@react-spring/web";
import { TProject } from "@src/types/project";
import layout, { dpToRem } from "@styles/layout";
import palette from "@styles/palette";
import styled from "styled-components";
import Image from "next/image";
import ThumbColudErp from "../images/ThumbCloudErp";
import useModal from "@hooks/store/modal/useModal";
import {
  siAmazonaws,
  siCsswizardry,
  siCypress,
  siDocker,
  siDotnet,
  siGithub,
  siGitlab,
  siGoogle,
  siJavascript,
  siLodash,
  siMicrosoftsqlserver,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOculus,
  siReact,
  siSocketdotio,
  siStyledcomponents,
  siThreedotjs,
  siTypescript,
  siWebgl,
  siRedux
} from "simple-icons/icons";
import { nanoid } from "@reduxjs/toolkit";

import dynamic from "next/dynamic";
import { getIconsByTag } from "@lib/tagIcons";
import moment from "moment";

type TProjectCardProps = {
  project: TProject.ProjectType;
};
const ProjectCard: React.FC<TProjectCardProps> = ({ project }) => {
  const { title, preview, company } = project;
  const { startDate, endDate, name } = company;
  const { description, tags } = preview;
  const { openModal } = useModal();
  const [circleStyle, circleApi] = useSpring(() => ({
    opacity: 0,
    transform: "scale(0.3)"
  }));
  const [imageStyle, imageApi] = useSpring(() => ({
    transform: "scale(1)"
  }));
  const onMouseOver = () => {
    circleApi({
      opacity: 0.8,
      transform: "scale(1)"
    });
    imageApi({
      transform: "scale(1.5)"
    });
  };
  const onMouseLeave = () => {
    circleApi({
      opacity: 0,
      transform: "scale(0.3)"
    });
    imageApi({
      transform: "scale(1)"
    });
  };
  const onClick = () =>
    openModal({
      type: "project",
      options: { withHeader: true },
      props: { project }
    });
  const mStartDate = moment(startDate).format("YYYY.MM");
  const mEndDate = moment(endDate).format("YYYY.MM");
  return (
    <Container
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Inner>
        <Title>{title}</Title>
        <SubTitle>{`${name}, ${mStartDate} - ${mEndDate}`}</SubTitle>
        <TagList>
          {tags.map(tag => (
            <TagItem key={nanoid()}>{getIconsByTag(tag)}</TagItem>
          ))}
        </TagList>
        <CircleButton style={circleStyle}>
          <span>VIEW PROJECT</span>
        </CircleButton>
        <ThumbContainer style={imageStyle}>
          <ThumbColudErp width={"100%"} height={"100%"} />
        </ThumbContainer>
        <Description>{description}</Description>
      </Inner>
    </Container>
  );
};

const CARD_WIDTH = "400px";
const CARD_HEIGHT = "500px";

const Container = styled.div`
  position: relative;
  margin: 1rem;
  height: 100%;
  cursor: pointer;
  overflow: "hidden";
`;

const Inner = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  border-top: 2px solid ${palette.blue_azure};
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  color: ${palette.white_snow};
`;

const Title = styled.header`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${palette.white_snow};
  z-index: 1;
  width: 100%;
  text-align: center;
  /* padding: ${layout.large}; */
`;

const SubTitle = styled.sub`
  font-size: 0.8rem;
  color: #ababab;
  margin-bottom: 1rem;
`;

const ThumbContainer = styled(animated.div)`
  z-index: -1;
  margin-bottom: 2rem;
`;

const TagList = styled.ul`
  display: flex;
  margin-bottom: 3rem;
`;

const TagItem = styled.li`
  margin: 0px 0.5rem;
`;

const CircleButton = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 2;
  background: ${palette.blue_azure} no-repeat center;
  border-radius: 50%;
`;

const Description = styled.p`
  height: ${dpToRem(100)};
  line-height: 1.25;
  padding: ${layout.xLarge};
`;

export default ProjectCard;
