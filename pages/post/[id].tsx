import { IPost } from "../../interfaces";
import { fetchPost, fetchPosts } from "../../api/post/post";
import { GetStaticPropsContext } from "next";
import Post from "../../components/post/Post";
import { useRouter } from "next/router";
import { useCommentData } from "../../utils/comment";
import Comments from "../../components/comment/comments";
import styled from "styled-components";
import CommentRegister from "../../components/comment/register/Register";
import { TitleFont } from "../../components/core/font/TitleFonts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const CommentSection = styled.div`
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

function PostDetail() {
  const router = useRouter();
  const postId = router.query.id;
  const { data, isLoading, isError } = useQuery<IPost>(
    ["post", postId],
    () => fetchPost(postId),
    { suspense: true }
  );
  const { data: comments } = useCommentData(postId);

  if (isLoading || isError) return;
  return (
    <Container>
      <Post data={data} />
      <CommentSection>
        <TitleFont fontSize="1.125rem">{comments?.length}개의 댓글</TitleFont>
        <CommentRegister postId={postId} />
        <Comments comments={comments} />
      </CommentSection>
    </Container>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const queryClient = new QueryClient();
  const postId = context.params?.id;
  await queryClient.prefetchQuery(["post", postId], () => fetchPost(postId));

  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 60 };
}

export async function getStaticPaths() {
  const data = await fetchPosts();
  const paths = data?.content?.map((post) => ({
    params: { id: post.postId.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default PostDetail;
