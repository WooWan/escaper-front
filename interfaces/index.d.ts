export interface IThemesType {
  id?: number;
  genre: string;
}

export interface IThemeInfo {
  id: number;
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
  postId: number;
  title: string;
  content: string;
  appointmentDate: Date;
  views: number;
  participation: number;
  themeList: IThemeList[];
}

export interface IPostsPagination {
  content: IPost[];
}

export interface IComment {
  postId: number;
  content: string;
}

export interface ICommentResponse {
  id: number;
  postId: number;
  content: string;
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
