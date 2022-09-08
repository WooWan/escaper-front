import { ICommentUpdateRequest } from "./../interfaces/index.d";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "./httpClient";
import { IComment, ICommentResponse } from "../interfaces";

async function addComment(comment: IComment) {
  const content = comment.content;
  return await httpClient.post(
    "/api/comment",
    { content },
    {
      params: { postId: comment.postId },
    }
  );
}

async function editComment({
  commentId,
  postId,
  content,
}: ICommentUpdateRequest) {
  return await httpClient.put(
    "/api/comment",
    { content },
    {
      params: { commentId, postId },
    }
  );
}

async function fetchComments(postId: string | string[] | undefined) {
  const response = await httpClient.get("/api/comment", { params: { postId } });
  return response.data;
}

export const useCommentData = (postId: string | string[] | undefined) => {
  return useQuery<ICommentResponse[]>(["comment", postId], () =>
    fetchComments(postId)
  );
};

export function useAddComment(postId: string | string[] | undefined) {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      console.log("add");
      queryClient.invalidateQueries(["comment", postId]);
    },
  });
}

export function useUpdateComment(postId: string | string[] | undefined) {
  const queryClient = useQueryClient();
  return useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["comment", postId]);
    },
  });
}
