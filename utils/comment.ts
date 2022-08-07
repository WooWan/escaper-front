import {useMutation, useQueryClient} from "@tanstack/react-query";
import {httpClient} from "./httpClient";

interface IComment {
  postId: number,
  comment: string,
}

function addComment(comment: IComment) {
  return httpClient.post("/api/comment", comment.comment, {params:{postId: comment.postId}});
}

export function useAddComment() {
  const queryClient = useQueryClient();
  return useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  });
}