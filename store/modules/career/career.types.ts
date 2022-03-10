export type TCareer = {
  _id?: {
    $oid: string;
  };
  companyName: string;
  position: string;
  department: string;
  startDate: string;
  imgPath?: string;
  companyURL?: string;
  endDate?: string;
  techTags?: string[];
  description?: string;
};
