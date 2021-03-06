import styled from "styled-components";
import { Cloud, IOptions, renderSimpleIcon } from "react-icon-cloud";
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
    siMongodb,
    siThreedotjs,
    siWebgl,
    siCsswizardry,
    siStyledcomponents,
    siGoogle,
    siLodash,
    siOculus,
    siRedux
  ];
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
