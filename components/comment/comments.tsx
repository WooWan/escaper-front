import React from 'react'
import { ICommentResponse } from '@/types'
import Comment from '@/components/comment/comment/Comment'

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
