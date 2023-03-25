import SidebarLayout from '@/components/layout/SidebarLayout'
import { ReactElement, useState } from 'react'
import { useRootState } from '@/store/utils'
import { useEscapeThemeBySearch } from '@/hooks/queries/search/useSearchTheme'
import styles from './home.module.css'

export default function Home() {
  const searchKeyword = useRootState((state) => state.search.searchKeyword)
  const [sliderIndex, setSliderIndex] = useState(0)
  const { data: result } = useEscapeThemeBySearch(searchKeyword)
  const translateClass = `-translate-x-[${sliderIndex * 100}%]`
  const itemCount = 20
  const itemPerSlide = 4
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
    <section className="bg-slate-50">
      <h3 className="text-s4">인기 테마</h3>
      <div className={styles.container}>
        <button onClick={handleLeftSlide} className={`${styles.handle} ${styles.leftHandle}`}>
          <div className={styles.text}>&#8249;</div>
        </button>
        {/*<div className={`${styles.slider} `}>*/}
        {/*<div className={clsx(styles.slider, 'translate-y-12 transform bg-green-400')}>*/}
        {/*<div className={`mx-1 flex flex-grow -translate-x-[calc(100%_*_${sliderIndex})]  gap-x-1`}>*/}
        <div className={`mx-1 flex flex-grow transition-all duration-700 ${translateClass} gap-x-1`}>
          {result?.slice(0, itemCount).map((theme, index) => {
            return (
              <div className="box-border aspect-16/9 flex-shrink-0 grow-0 basis-[25%] bg-red-300" key={theme.id}>
                hello, ${index}
              </div>
            )
          })}
        </div>
        <button onClick={handleRightSlide} className={`${styles.handle} ${styles.rightHandle}`}>
          <div className={styles.text}>&#8250;</div>
        </button>
      </div>
      {/*<div className="group flex justify-center overflow-hidden">*/}
      {/*  <div className="z-10 flex w-12 w-8 cursor-pointer items-center  justify-center transition-all duration-500 group-hover:bg-green-300">*/}
      {/*    <button className="text-2xl duration-700 group-hover:scale-125">&#8249;</button>*/}
      {/*  </div>*/}
      {/*  /!*slider*!/*/}
      {/*  <div className="flex flex-grow -translate-x-[00%] gap-2">*/}
      {/*    {result?.slice(index, index + 10).map((theme, index) => {*/}
      {/*      return (*/}
      {/*        <div className="box-border aspect-16/9 flex-shrink-0 grow-0 basis-[25%] bg-red-300" key={theme.id}>*/}
      {/*          hello, ${index}*/}
      {/*        </div>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*  <div className="z-10 flex w-8 cursor-pointer items-center justify-center text-2xl">*/}
      {/*    <button className="duration-700 group-hover:scale-125">&#8250;</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*container*/}
      {/*<div className="group relative">*/}
      {/*  <AnimatePresence>*/}
      {/*    /!*row/*!/*/}
      {/*    /!*<div className="flex justify-center">*!/*/}
      {/*    <div className="absolute left-0 flex h-full w-[2.5%] items-center justify-center transition-all duration-700 group-hover:scale-150">*/}
      {/*      ﹤*/}
      {/*    </div>*/}
      {/*    <motion.div*/}
      {/*      className="flex h-48 w-[90%] gap-x-4 px-[2.5%]"*/}
      {/*      variants={rowVariants}*/}
      {/*      initial="hidden"*/}
      {/*      animate="visible"*/}
      {/*      exit="exit"*/}
      {/*      transition={{ type: 'tween', duration: 1 }}*/}
      {/*      key={index}*/}
      {/*    >*/}
      {/*      /!*<div>*!/*/}
      {/*      {result?.slice(index, index + 8).map((theme) => {*/}
      {/*        return (*/}
      {/*          <div className="z-10 w-48 max-w-[25%] shrink-0 grow-0 bg-red-300" key={theme.id}>*/}
      {/*            hello*/}
      {/*          </div>*/}
      {/*        )*/}
      {/*      })}*/}

      {/*      /!*</div>*!/*/}
      {/*    </motion.div>*/}
      {/*    /!*</div>*!/*/}
      {/*  </AnimatePresence>*/}
      {/*  <div className="absolute right-0 flex w-[2.5%] items-center justify-center bg-green-400 transition-all duration-700 group-hover:scale-150">*/}
      {/*    dd*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<ul className="flex flex-wrap  justify-center gap-12">*/}
      {/*  {result?.map((theme) => {*/}
      {/*    return (*/}
      {/*      <Link key={theme.id} href={`/theme/${theme.id}`}>*/}
      {/*        <li className="min-w-[300px] cursor-pointer rounded-lg bg-white">*/}
      {/*          <div className="relative aspect-3/4">*/}
      {/*            <Image src={theme.imageURL} fill alt="logo" />*/}
      {/*          </div>*/}
      {/*          <div className="flex flex-col px-2">*/}
      {/*            <h4>{theme.name}</h4>*/}
      {/*            <div className="flex items-center gap-2">*/}
      {/*              <Rating*/}
      {/*                initialValue={theme.rating}*/}
      {/*                style={{ display: 'flex', height: 'auto', width: '100%' }}*/}
      {/*                readonly*/}
      {/*                size={16}*/}
      {/*                SVGstyle={{ display: 'inline-flex' }}*/}
      {/*              />*/}
      {/*              <span className="text-b1">{theme.rating}</span>*/}
      {/*            </div>*/}
      {/*            <span className="text-b2 text-gray-400">{theme.cafe.name}</span>*/}
      {/*          </div>*/}
      {/*        </li>*/}
      {/*      </Link>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</ul>*/}
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
