export interface IForm {
  title: string;
  content: string;
  date: Date;
  city: string;
  region: string;
  area: string;
  cafe: string;
  themeName: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface ISearch {
  id: number;
  name: string;
}

export interface IPostUpdateRequest {
  title: string;
  content?: string;
  date: Date;
  city: string;
  region: string;
  area: string;
  cafe: string;
  themeName: string;
  participation: number;
  postId?: number;
}
