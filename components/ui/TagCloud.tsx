import styled from "styled-components";
import { Cloud, IOptions, renderSimpleIcon } from "react-icon-cloud";
import {
  siAmazonaws,
  siCypress,
  siDocker,
  siDotnet,
  siGithub,
  siGitlab,
  siJavascript,
  siMicrosoftsqlserver,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siSocketdotio,
  siTypescript
} from "simple-icons/icons";
import Icon from "@icons-pack/react-simple-icons";
import { boolean } from "fp-ts";
import { Nullable } from "@src/types/util";

type TTagCloudProps = {
  options?: IOptions;
};

const TagCloud: React.FC<TTagCloudProps> = ({ options }) => {
  siAmazonaws.hex = "F79919";
  const sIcons = [
    siJavascript,
    siNextdotjs,
    siReact,
    siAmazonaws,
    siTypescript,
    siNodedotjs,
    siDocker,
    siSocketdotio,
    siGithub,
    siGitlab,
    siDotnet,
    siCypress,
    siMicrosoftsqlserver,
    siMongodb
  ];
  console.log(sIcons);
  const icons = sIcons.map(icon => {
    return renderSimpleIcon({
      icon,
      size: 100,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    });
  });
  const defaultOptions: IOptions = {
    wheelZoom: false,
    noSelect: true,
    initial: [0.1, -0.1],
    maxSpeed: 0.02,
    minSpeed: 0.02
  };
  return (
    <Container>
      <Cloud options={options || defaultOptions}>{icons}</Cloud>
    </Container>
  );
};

const Container = styled.div``;

export default TagCloud;
