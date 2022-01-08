import { TModalState } from "@store/modules/modal/modal.types";
import loadable from "@loadable/component";

const modalIndex: TModalState[] = [
  {
    type: "about/Resume",
    component: loadable(() => import("@components/about/Resume"))
  },
  {
    type: "SampleModal",
    component: loadable(() => import("./SampleModal"))
  }
];

export default modalIndex;
