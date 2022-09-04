import { Fragment, useState } from "react";
import { IPost } from "../../interfaces";
import { fetchPost, fetchPosts } from "../../api/post/post";
import { GetStaticPropsContext } from "next";
import Post from "../../components/post/Post";
import { useRouter } from "next/router";
import { useCommentData } from "../../utils/comment";
import Comments from "../../components/comment/comments";
import styled from "styled-components";
import CommentRegister from "../../components/comment/register/Register";

const CommentSection = styled.div`
  margin: 0 auto;
  /* width: 768px; */
`;

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

interface IProps {
  post: IPost;
}

function PostDetail(props: IProps) {
  const router = useRouter();
  const postId = router.query.id ?? "";
  const { data: comments } = useCommentData(+postId);
  const [post] = useState(props.post);

  return (
    <Container>
      <Post data={post} />
      <CommentSection>
        <CommentRegister postId={+postId} commentLength={comments?.length} />
        <Comments comments={comments} />
      </CommentSection>
    </Container>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const postId = context.params?.id;
  const post = await fetchPost(postId);
  return { props: { post }, revalidate: 60 };
}

export async function getStaticPaths() {
  const data = await fetchPosts();
  const paths = data?.content?.map((post) => ({
    params: { id: post.postId.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default PostDetail;
