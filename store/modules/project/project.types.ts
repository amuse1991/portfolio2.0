import { TTechTags } from "../career/career.types";

export interface TProject {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  urls?: string[];
  documentPath?: string;
  summary?: string;
  techTags?: TTechTags;
  role?: string;
}
