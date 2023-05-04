import React from 'react'
import { ICommentResponse } from '@/src/types'
import Comment from '@/src/components/comment/comment/Comment'

interface IProps {
  comments?: ICommentResponse[]
}

function Comments({ comments }: IProps) {
  return (
    <div>
      {comments?.map((comment) => {
        return <Comment key={comment.id} {...comment} />
      })}
    </div>
  )
}

export default Comments
