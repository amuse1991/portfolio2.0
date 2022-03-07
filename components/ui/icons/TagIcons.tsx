import * as Icons from "@icons-pack/react-simple-icons";

export const Tag = {
  react: "ReactJs",
  typescript: "Typescript",
  javascript: "Javascript",
  redux: "Redux",
  node: "Nodedotjs",
  express: "Express",
  socketio: "Socketdotio",
  sqlserver: "Microsoftsqlserver",
  cSharp: "Csharp",
  dotNet: "Dotnet",
  puppeteer: "Puppeteer",
  aws: "Amazonaws",
  docker: "Docker"
} as const;

export type TTag = typeof Tag[keyof typeof Tag];

export const getIconsByTag = (tag: TTag, props = {}) => {
  // @ts-ignore
  const SIcon = Icons[tag];
  return <SIcon {...props} />;
};
