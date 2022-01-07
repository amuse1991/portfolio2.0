import { TModalConfig } from "@store/modules/modal/modal.types";
import loadable from "@loadable/component";

const modalConfigs: TModalConfig[] = [
  {
    type: "about/Resume",
    component: loadable(() => import("@components/about/Resume"))
  }
];

export default modalConfigs;
