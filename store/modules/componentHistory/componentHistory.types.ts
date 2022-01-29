export type TComponentHistory = {
  path: string;
  prev?: string;
  options?: {
    useShallowRoute?: boolean;
    Component?: React.ReactNode;
  };
};

export type TComponentHistoryState = {
  current: TComponentHistory | null;
  prev: TComponentHistory | null;
};
