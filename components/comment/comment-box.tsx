import React, {Fragment} from 'react';
import CommentRegister from "./comment-register";
import {ICommentResponse} from "../../types";
import Comments from "./comments";

interface IProps {
  comments?: ICommentResponse[]
  postId: number
}

function CommentBox({postId, comments}:IProps) {
  return (
    <Fragment>
      <CommentRegister postId={postId}/>
      <Comments comments={comments}/>
    </Fragment>
  );
}

export default CommentBox;