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
  dotNet: "Dotnet"
} as const;

export type TTag = typeof Tag[keyof typeof Tag];

export const getIconsByTag = (tag: TTag, props = {}) => {
  switch (tag) {
    case Tag.react:
      return <Icons.ReactJs {...props} />;
    case Tag.typescript:
      return <Icons.Typescript {...props} />;
    case Tag.javascript:
      return <Icons.Javascript {...props} />;
    case Tag.redux:
      return <Icons.Redux {...props} />;
    case Tag.node:
      return <Icons.Nodedotjs {...props} />;
    case Tag.express:
      return <Icons.Express {...props} />;
    case Tag.socketio:
      return <Icons.Socketdotio {...props} />;
    case Tag.sqlserver:
      return <Icons.Microsoftsqlserver {...props} />;
    case Tag.cSharp:
      return <Icons.Csharp {...props} />;
    case Tag.dotNet:
      return <Icons.Dotnet {...props} />;
  }
};
