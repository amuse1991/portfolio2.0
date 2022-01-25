import { TTechTags } from "../career/career.types";
export interface TProject {
  name: string;
  startDate: string;
  endDate: string;
  urls?: string[];
  documentPath?: string;
  summary?: string;
  techTags?: TTechTags;
  role?: string;
  thumbnailPath?: string;
  _id: string;
}
