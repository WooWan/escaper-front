import React from "react";
import { ICommentResponse } from "../../interfaces";
import Comment from "./comment";

interface IProps {
  comments?: ICommentResponse[];
}

function Comments({ comments }: IProps) {
  return (
    <div>
      {comments?.map((comment) => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </div>
  );
}

export default Comments;
