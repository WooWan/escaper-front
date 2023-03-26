import SidebarLayout from '@/components/layout/SidebarLayout'
import React, { ReactElement, useState } from 'react'
import { useRootState } from '@/store/utils'
import { useEscapeThemeBySearch } from '@/hooks/queries/search/useSearchTheme'
import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Rating } from '@/components/ui/rating/Rating'

export default function Home() {
  const searchKeyword = useRootState((state) => state.search.searchKeyword)
  const [sliderIndex, setSliderIndex] = useState(0)
  const { data: result } = useEscapeThemeBySearch(searchKeyword)
  const itemCount = 20
  const itemPerSlide = 5
  const slideCount = itemCount / itemPerSlide

  const handleLeftSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex((prev) => prev - 1)
    } else {
      setSliderIndex(slideCount - 1)
    }
  }

  const handleRightSlide = () => {
    console.log('right')
    if (sliderIndex < slideCount - 1) {
      setSliderIndex((prev) => prev + 1)
    } else {
      setSliderIndex(0)
    }
  }
  return (
    <section className="bg-slate-50">
      <h3 className="text-s4">인기 테마</h3>
      <div className={styles.container}>
        <button onClick={handleLeftSlide} className={`${styles.handle} ${styles.leftHandle}`}>
          <div className={styles.text}>&#8249;</div>
        </button>
        <div
          style={{
            transform: `translateX(${-sliderIndex * 100}%)`,
          }}
          className={`mx-1 flex flex-grow gap-x-1 transition-all  duration-700`}
        >
          {result?.slice(0, itemCount).map((theme) => {
            return (
              <div className="aspect-16/9 flex-shrink-0 grow-0 basis-[20%]" key={theme.id}>
                <Link key={theme.id} href={`/theme/${theme.id}`}>
                  <div className="relative aspect-3/4">
                    <Image src={theme.imageURL} fill alt="logo" />
                  </div>
                  <div className="flex flex-col px-2">
                    <h4>{theme.name}</h4>
                    <div className="relative flex h-4 w-4 items-center">
                      <div className="flex items-baseline gap-2">
                        <Rating initialValue={theme.rating} readonly size={16} SVGstyle={{ display: 'inline-flex' }} />
                        <span className="text-b1">{theme.rating}</span>
                      </div>
                    </div>
                    <div className="text-b2 text-gray-400">{theme.cafe.name}</div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <button onClick={handleRightSlide} className={`${styles.handle} ${styles.rightHandle}`}>
          <div className={styles.text}>&#8250;</div>
        </button>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
