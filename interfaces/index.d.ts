import { IMember } from "./member.d";
export interface IThemesType {
  id?: number;
  genre: string;
}

export interface IThemeInfo {
  themeId: number;
  cafeName: string;
  name: string;
  genre: string;
  rating: number;
  imageURL: string;
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

export interface IReview {
  reviewId: number;
  content: string;
  rate?: number;
  themeId: number;
  likes: number;
}

export interface IRatingRequest {
  themeId: string | string[] | undefined;
  memberId: number;
  rating: number;
}

export interface ICafe {
  id: number;
  name: string;
  themes: IThemeInfo[];
}
