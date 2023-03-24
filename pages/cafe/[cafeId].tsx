import { GetStaticPropsContext } from 'next'
import { fetchCafeById, fetchCafeList } from '@/api/cafe'
import Cafe from '@/components/cafe/Cafe'
import { CafeType } from '@/types/theme'
import Reviews from '@/components/review/Reviews'
import { ReactElement } from 'react'
import SidebarLayout from '@/components/layout/SidebarLayout'

type Props = {
  cafe: CafeType
}

function CafePage({ cafe }: Props) {
  const reviewList = cafe.themeList.map((theme) => theme.reviewList).reduce((acc, cur) => [...acc, ...cur], [])

  return (
    <div>
      <div className="px-4">
        <Cafe cafe={cafe} />
        <section className="pt-16">
          <h3 className="text-s3">리뷰</h3>
          <Reviews reviews={reviewList} />
        </section>
      </div>
    </div>
  )
}

CafePage.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.cafeId
  const cafe = await fetchCafeById(id)

  return {
    props: { cafe },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const cafeList = await fetchCafeList()
  const paths = cafeList?.map((cafe) => ({
    params: { cafeId: cafe.id.toString() },
  }))
  return { paths, fallback: 'blocking' }
}

export default CafePage
