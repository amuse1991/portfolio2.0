import { TModalState } from "@store/modules/modal/modal.types";
import loadable from "@loadable/component";

const modalIndex: TModalState[] = [
  {
    type: "about/Career",
    component: loadable(() => import("@components/about/Career"))
  },
  {
    type: "SampleModal",
    component: loadable(() => import("./SampleModal"))
  }
];

export default modalIndex;
