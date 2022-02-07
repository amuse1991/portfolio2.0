import { TModalState } from "@store/modules/modal/modal.types";
import dynamic from "next/dynamic";

const modalIndex: TModalState[] = [
  {
    type: "about/Career",
    component: dynamic(() => import("@components/about/resume/Resume"))
  },
  {
    type: "blog/Category",
    component: dynamic(() => import("@components/blog/CategoryList"))
  },
  {
    type: "contact/MessageSend"
  }
];

export default modalIndex;
