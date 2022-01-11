import React from "react";

// export type TModalState = {
//   opened: string[];
// };

export type TModalState = {
  type: string;
  component?: React.ComponentType<any>;
  props?: any;
  options?: TModalConfigOptions;
};

/**
 * react-modal의 configuration 참조
 * http://reactcommunity.org/react-modal/
 */
export type TModalConfigOptions = {
  isOpen?: boolean;
  shouldFocusAfterRender?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  role?: string;
  preventScroll?: boolean;
  testId?: string;
  modalStyle?: React.CSSProperties;
  withHeader?: boolean;
};
