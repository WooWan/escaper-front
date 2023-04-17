import { GetStaticPropsContext } from 'next'
import { fetchThemeById, fetchThemeList } from '@/api/theme'
import ThemeInfo from '@/components/theme/theme/Theme'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import ReviewRegister from '@/components/review/review-register'
import Reviews from '@/components/review/Reviews'
import { ReactElement, useState } from 'react'
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
import { useEscapeThemeReview, useReviewsByEscapeTheme } from '@/hooks/queries/review/useThemeReview'
import ReviewEdit from '@/components/review/ReviewEdit'

function ThemePage() {
  const router = useRouter()
  const themeId = router.query.id
  const { data: session, status: userStatus } = useSession()
  const escapeTheme = useQuery(['theme', themeId], () => fetchThemeById(String(themeId)))
  const userId = session?.user.id
  const { data: reviews } = useReviewsByEscapeTheme(String(themeId), String(userId), userStatus)
  const { data: likeList } = useEscapeThemeLikeCount(String(themeId))
  const addLike = useAddEscapeThemeLike()
  const deleteLike = useRemoveEscapeThemeLike()
  const isLiked = likeList?.some((like) => like.userId === session?.user.id)
  const { data: userReview, status: reviewStatus } = useEscapeThemeReview(String(userId), String(themeId), userStatus)
  const [isReviewEditOpen, setIsReviewEditOpen] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      deleteLike.mutate({ escapeThemeId: String(themeId), userId: String(userId) })
    } else {
      addLike.mutate({ escapeThemeId: String(themeId), userId: String(userId) })
    }
  }
  const closeReviewEdit = () => {
    setIsReviewEditOpen(false)
  }
  const openReviewEdit = () => {
    setIsReviewEditOpen(true)
  }
  if (escapeTheme.isLoading) return <div>loading...</div>
  if (escapeTheme.isError) return <div>error</div>

  return (
    <section className="mx-auto flex h-full flex-col">
      <ThemeInfo theme={escapeTheme.data} />
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
              <h4 className="text-s3">{reviews?.length}</h4>
            </span>
          </div>
        </div>
        <ReviewRegister userReview={userReview} />
        {isReviewEditOpen && (
          <ReviewEdit
            closeReviewEdit={closeReviewEdit}
            userReview={userReview}
            themeId={escapeTheme.data.id}
            userId={userId}
          />
        )}
        <Reviews userId={userId} openReviewEdit={openReviewEdit} reviews={reviews} userReview={userReview} />
      </div>
    </section>
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
