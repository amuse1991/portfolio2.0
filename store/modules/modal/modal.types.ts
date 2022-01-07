import React from "react";

export type TModalState = {
  opened: string[];
};

export type TModalConfig = {
  type: string;
  component: React.ComponentType<any>;
  props?: any;
  options?: TModalConfigOptions;
};

type TModalConfigOptions = {};
