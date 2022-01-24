import { TProject } from "../project/project.types";
export type TPost = {
  title: string;
  postingDatetime: Date;
  documentPath: string;
  summary?: string;
  thumbnailUrl?: string;
  haderImageUrl?: string;
  category?: string;
  projects?: TProject[];
};
