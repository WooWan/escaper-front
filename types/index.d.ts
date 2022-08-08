export interface IThemesType {
  id?: number,
  genre: string,
}

export interface ITheme {
  id: number,
  name: string,
  genre: string,
  rate: number,
  imageURL: string;
}

export interface IThemeList {
  id: number,
  name: string,
}

export interface IPost {
  postId: number,
  title: string,
  content: string,
  appointmentDate: Date,
  views: number,
  participation: number,
  themeList:IThemeList[]
}

export interface IPostsPagination {
  content: IPost[]
}

export interface IComment {
  postId: number,
  content: string
}

export interface ICommentResponse {
  id: number
  postId: number
  content: string
}