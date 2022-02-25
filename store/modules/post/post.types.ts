import { TProject } from "@src/types/project";
export type TPost = {
  _id: string;
  title: string;
  postingDatetime: Date;
  documentPath: string;
  summary?: string;
  thumbnailUrl?: string;
  haderImageUrl?: string;
  category?: string;
  projects?: TProject.ProjectType[];
};
