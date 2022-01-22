export type TCareer = {
  companyName: string;
  companyURL: string;
  position: string;
  department: string;
  imgPath: string;
  startDate: string;
  endDate: string;
  techTags: TTechTags;
  description: string;
  projectIDs: number;
};

export type TTechTags = "node" | "react" | "js";
