export namespace Project {
  export interface Preview {
    card: {
      type: string;
      frontBackground: string;
      backBackground: string;
    };
    tags: string[];
    description: string;
  }
  export interface Company {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
  }
  export interface Detail {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    tasks: string[];
  }
  export interface DevStack {
    language?: any;
    frontend?: any;
    backend?: any;
    test?: any;
  }
  export interface Thumbnail {
    paths: string[];
  }
  export interface ProjectType {
    _id: number;
    title: string;
    preview: Preview;
    company: Company;
    devStack: DevStack;
    thumbnail: Thumbnail;
    details: Detail[];
  }
}
