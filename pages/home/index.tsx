import SidebarLayout from '@/components/layout/SidebarLayout'
import React, { ReactElement, useState } from 'react'
import { useRootState } from '@/store/utils'
import { useEscapeThemeBySearch } from '@/hooks/queries/search/useSearchTheme'
import styles from './home.module.css'
import ThemeBox from '@/components/theme/theme-box/ThemeBox'

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
    if (sliderIndex < slideCount - 1) {
      setSliderIndex((prev) => prev + 1)
    } else {
      setSliderIndex(0)
    }
  }
  return (
    <section>
      <div className={`group/container ${styles.container}`}>
        <button
          className={`handle leftHandle group/handle group-hover/container:opacity-100`}
          onClick={handleLeftSlide}
        >
          <div className={`chevron group-hover/handle:scale-150`}>&#8249;</div>
        </button>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(${-sliderIndex * 100}%)`,
          }}
        >
          {result?.slice(0, itemCount).map((theme) => (
            <ThemeBox {...theme} key={theme.id} />
          ))}
        </div>
        <button
          onClick={handleRightSlide}
          className={`handle rightHandle group/handle group-hover/container:opacity-100`}
        >
          <div className={`chevron group-hover/handle:scale-150`}>&#8250;</div>
        </button>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
