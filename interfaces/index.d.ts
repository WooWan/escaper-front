import { IMember } from "./member.d";
export interface IThemesType {
  id?: number;
  genre: string;
}

export interface IThemeInfo {
  themeId: number;
  name: string;
  genre: string;
  rating: number;
  imageURL: string;
  cafeResponse: ICafe;
}

export interface IThemeList {
  id: number;
  name: string;
}

export interface IPost {
  memberResponse: IMember;
  postId: number;
  title: string;
  content: string;
  createdDate: Date;
  appointmentDate: Array;
  views: number;
  participation: number;
  imageURL: string;
  themeResponse: IThemeInfo;
}

export interface IPostsPagination {
  content: IPost[];
}

export interface ICommentUpdateRequest {
  commentId: number;
  postId: number;
  content: string;
}
export interface IComment {
  postId: number;
  content: string;
}

export interface ICommentResponse {
  memberResponse: IMember;
  id: number;
  postId: string | string[] | undefined;
  content: string;
  createdDate: Date;
}

export interface IReviewResult {
  data: IReview[];
  count: number;
  averageRating: number;
}
export interface IReview {
  reviewId: number;
  content: string;
  rate?: number;
  themeId: number;
  likes: number;
  memberResponse: IMember;
}

export interface IRatingRequest {
  themeId: string | string[] | undefined;
  memberId: number;
  rating: number;
}

export interface ICafe {
  id: number;
  name: string;
  address: IAddress;
  themes: IThemeInfo[];
}

export interface IAddress {
  city: string;
  area: string;
  streets: string;
  detail: string;
}
