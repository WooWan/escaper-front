import {httpClient} from "./httpClient";

export const fetchPosts = async ()=> {
  const response = await httpClient.get("/api/posts");
  return response.data;
};

export const fetchPost = async (postId:string | string[])=> {
  const response = await httpClient.get(`/api/post/${postId}`);
  return await response.data;
};
