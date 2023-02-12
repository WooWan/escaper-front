import { IAddress } from "./index";

export interface IThemeDetail {
  themeId: number;
  name: number;
  genre: number;
  description: number;
  timeLimitation: number;
  themeRating: number;
  cost: number;
  imageURL: string;
  cafeId: number;
  phoneNumber: string;
  cafeName: string;
  address: IAddress;
}

export interface IMemberRating {
  memberRating: number;
}
