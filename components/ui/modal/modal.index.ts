import { TModalState } from "@store/modules/modal/modal.types";
import loadable from "@loadable/component";

const modalIndex: TModalState[] = [
  {
    type: "about/Career",
    component: loadable(() => import("@components/about/resume/Career"))
  },
  {
    type: "blog/Category",
    component: loadable(() => import("@components/blog/CategoryList"))
  },
  {
    type: "contact/MessageSend"
  }
];

export default modalIndex;
