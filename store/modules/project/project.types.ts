export type TProjectPreview = {
  card: {
    type: string;
    frontBackground: string;
    backBackground: string;
  };
  tags: string[];
  description: string;
};

export type TCompany = {
  name: string;
  position: string;
  startDate: Date;
  endDate: Date;
};

type TProjectDetail = {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  tasks: string[];
};

export type TProject = {
  _id: number;
  title: string;
  preview: TProjectPreview;
  company: TCompany;
  devStack: {
    language?: string[];
    frontend?: string[];
    backend?: string[];
    test?: string[];
  };
  thumbnail: {
    paths: string[];
  };
  details: TProjectDetail[];
};
