import { IPost } from 'src/types'
import { fetchPost, fetchPosts } from '@/src/api/post/post'
import { GetStaticPropsContext } from 'next'
import Post from '@/src/components/post/Post'
import { useRouter } from 'next/router'
import { useCommentData } from '@/src/utils/comment'
import Comments from '@/src/components/comment/comments'
import CommentRegister from '@/src/components/comment/register/Register'
import Font from '@/src/components/core/font/Font'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

function PostDetail() {
  const router = useRouter()
  const postId = router.query.id
  const { data, isLoading, isError } = useQuery<IPost>(['post', postId], () => fetchPost(postId), { suspense: true })
  const { data: comments } = useCommentData(postId)

  if (isLoading || isError) return
  return (
    <section className={'mx-auto max-w-[920px]'}>
      <Post data={data} />
      <div className={'mx-auto'}>
        <Font fontType="subtitle">{comments?.length}개의 댓글</Font>
        <CommentRegister postId={postId} />
        <Comments comments={comments} />
      </div>
    </section>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const queryClient = new QueryClient()
  const postId = context.params?.id
  await queryClient.prefetchQuery(['post', postId], () => fetchPost(postId))

  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 60 }
}

export async function getStaticPaths() {
  const data = await fetchPosts()
  const paths = data?.content?.map((post) => ({
    params: { id: post.postId.toString() },
  }))
  return { paths, fallback: 'blocking' }
}

export default PostDetail
