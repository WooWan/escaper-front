export interface IForm {
  title: string;
  content: string;
  region: string;
  city: string;
  area: string;
  date: Date;
  cafe: string;
  theme: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface ISearch {
  id: number;
  name: string;
}
