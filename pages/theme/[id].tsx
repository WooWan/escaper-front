import { GetStaticPropsContext } from 'next'
import { IReviewResult } from '@/types'
import { fetchReview, fetchThemeById, fetchThemeList, fetchThemeRatingOfUser } from '@/api/theme'
import styled from 'styled-components'
import ThemeInfo from '@/components/theme/theme/Theme'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import ReviewRegister from '@/components/review/review-register'
import Reviews from '@/components/review/Reviews'
import { IMemberRating, IThemeDetail } from '@/types/theme'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/slices/user/user'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  height: 100%;
`

const ReviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

function ThemePage() {
  const router = useRouter()
  const themeId = router.query.id
  const { data: theme, isError, isLoading } = useQuery<IThemeDetail>(['theme', themeId], () => fetchThemeById(themeId))

  const { user } = useSelector(selectUser)
  const memberId = user?.id

  const { data } = useQuery<IMemberRating>(['rating', memberId, themeId], () => fetchThemeRatingOfUser(themeId, memberId), { enabled: !!memberId })

  const reviewResult = useQuery<IReviewResult>(['review', themeId], () => fetchReview(themeId))
  // const { data: review } = reviewResult;
  if (isLoading || isError) return
  if (reviewResult.isLoading || reviewResult.isError) return 'review loading'

  return (
    <Container>
      <ThemeInfo theme={theme} memberRating={data?.memberRating} count={reviewResult.data.count} averageRating={reviewResult?.data.averageRating} />
      <ReviewWrapper>
        <ReviewRegister />
        <Reviews reviews={reviewResult.data} />
      </ReviewWrapper>
    </Container>
  )
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const id = context.params?.id
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['theme', id], () => fetchThemeById(id))

//   return {
//     props: { dehydratedState: dehydrate(queryClient) },
//     revalidate: 3600,
//   }
// }

// export async function getStaticPaths() {
//   const themeList = await fetchThemeList()
//   const paths = themeList?.map((theme) => ({
//     params: { id: theme.themeId.toString() },
//   }))
//   return { paths, fallback: 'blocking' }
// }

export default ThemePage
