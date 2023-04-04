import { GetStaticPropsContext } from 'next'
import { IReviewResult } from '@/types'
import { fetchReview, fetchThemeById, fetchThemeList } from '@/api/theme'
import styled from 'styled-components'
import ThemeInfo from '@/components/theme/theme/Theme'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import ReviewRegister from '@/components/review/review-register'
import Reviews from '@/components/review/Reviews'
import { ReactElement } from 'react'
import { escapeThemeKey } from '@/hooks/queries/escapeTheme/queries'
import { useSession } from 'next-auth/react'
import SidebarLayout from '@/components/layout/SidebarLayout'
import { Heart, MessageCircle } from 'lucide-react'
import {
  useAddEscapeThemeLike,
  useEscapeThemeLikeCount,
  useRemoveEscapeThemeLike,
} from '@/hooks/queries/escapeTheme/likes/useAddEscapeThemeLike'
import clsx from 'clsx'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  height: 100%;
`

function ThemePage() {
  const router = useRouter()
  const themeId = router.query.id
  const { data: session } = useSession()
  const { data: theme } = useQuery(['theme', themeId], () => fetchThemeById(String(themeId)))
  const { data: reviews } = useQuery<IReviewResult>(['review', themeId], () => fetchReview(themeId))
  const { data: likeList } = useEscapeThemeLikeCount(String(themeId))
  const addLike = useAddEscapeThemeLike()
  const deleteLike = useRemoveEscapeThemeLike()
  const isLiked = likeList?.some((like) => like.userId === session?.user.id)
  const reviews2 = theme?.reviewList
  const memberId = session?.user.id

  const handleLike = () => {
    if (isLiked) {
      deleteLike.mutate({ escapeThemeId: String(themeId), userId: String(memberId) })
    } else {
      addLike.mutate({ escapeThemeId: String(themeId), userId: String(memberId) })
    }
  }

  return (
    <Container>
      {/* <Suspense fallback={<>..loading</>}> */}
      <ThemeInfo theme={theme} />
      {/* </Suspense> */}
      <div>
        <div className="flex gap-x-5 py-2">
          <div onClick={handleLike} className="flex cursor-pointer items-center gap-x-1">
            <Heart color={'red'} size={18} className={clsx({ 'fill-red-500': isLiked })} />
            <span className="flex items-center gap-1">
              좋아요
              <h4 className="w-1 text-s3">{likeList?.length}</h4>
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <MessageCircle size={18} />
            <span className="flex items-center gap-1">
              댓글
              <h4 className="text-s3">{reviews2?.length}</h4>
            </span>
          </div>
        </div>
        <ReviewRegister />
        <Reviews reviews={reviews2} />
      </div>
    </Container>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id as string
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: escapeThemeKey.detail(id),
    queryFn: () => fetchThemeById(id),
  })

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const themeList = await fetchThemeList()
  const paths = themeList?.map((theme) => ({
    params: { id: theme.id.toString() },
  }))
  return { paths, fallback: 'blocking' }
}

ThemePage.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}

export default ThemePage
