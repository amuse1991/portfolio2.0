import { TCareer } from "@store/modules/career/career.types";
import { TProject } from "@store/modules/project/project.types";

export interface ProjectModel extends TProject {
  career: TCareer;
}
