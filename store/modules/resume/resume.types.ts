import { TCareer } from "../career/career.types";

export type TResume = {
  career: TCareer;
  eduction: TEduction;
  activity: TActivity;
};

export type TEduction = {
  name: string;
  startDate: string;
  endDate: string;
  major: string;
  description: string;
};

export type TActivity = {
  name: string;
  startDate: string;
  endDate?: string | null;
  details?: string[];
};
