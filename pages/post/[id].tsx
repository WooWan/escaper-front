import {Fragment, useState} from 'react';
import {httpClient} from "../../utils/httpClient";
import {IPost, IPostsPagination} from "../../types";
import {fetchPost} from "../../utils/post";
import {GetStaticPropsContext} from "next";
import Post from "../../components/post/Post";
import {useRouter} from "next/router";
import {useCommentData} from "../../utils/comment";
import Comments from "../../components/comment/comments";
import styled from "styled-components";
import CommentRegister from "../../components/comment/comment-register";

const CommentSection = styled.div`
  margin: 0 auto;
  width: 768px;
`

interface IProps {
  post: IPost
}

function PostDetail(props: IProps) {
  const router = useRouter();
  const postId = router.query.id ?? "";
  const {data: comments} = useCommentData(+postId);
  const [post] = useState(props.post);

  return (
    <Fragment>
      <Post data={post}/>
      <CommentSection>
        <CommentRegister postId={+postId} commentLength={comments?.length}/>
        <Comments comments={comments}/>
      </CommentSection>
    </Fragment>
  );
}

export async function getStaticProps (context: GetStaticPropsContext){
  const postId = context.params?.id ?? "";
  const post = await fetchPost(postId.toString());
  return {props: {post}, revalidate: 60}
}

export async function getStaticPaths() {
  const response = await httpClient.get<IPostsPagination>("/api/posts");
  const data = await response.data;
  const paths = data?.content?.map((post) => ({params: {id: post.postId.toString()}}))
  return {paths, fallback: 'blocking'}
}

export default PostDetail;