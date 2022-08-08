import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {httpClient} from "./httpClient";
import {IComment, ICommentResponse} from "../types";


function addComment(comment: IComment) {
  const content = comment.content;
  return httpClient.post("/api/comment", content, {params:{postId: comment.postId}});
}

async function fetchComments(postId: number) {
  const response = await httpClient.get("/api/comment", {params: {postId}});
  return await response.data;
}

export const useCommentData = (postId: number) => {
  return useQuery<ICommentResponse[]>(['comment', postId], () => fetchComments(+postId));
};

export function useAddComment(postId: number) {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comment', postId])
    }
  });
}