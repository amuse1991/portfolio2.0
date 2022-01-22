export type TCareer = {
  id: string;
  companyName: string;
  position: string;
  department: string;
  startDate: string;
  imgPath?: string;
  companyURL?: string;
  endDate?: string;
  techTags?: TTechTags;
  description?: string;
};

export type TTechTags = "node" | "react" | "js";
