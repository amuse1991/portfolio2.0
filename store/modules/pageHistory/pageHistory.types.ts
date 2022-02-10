export type TPageHistory = {
  path: string;
  prev?: string;
  options?: {
    useShallowRoute?: boolean;
    Component?: React.ReactNode;
  };
};
