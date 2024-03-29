import PostBox from './PostBox'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import { IPost } from '@/src/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPostsInfinite } from '@/src/utils/posts'
import { useObserver } from '@/src/utils/hooks/useObserver'

const PostList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface IPostsPageImpl {
  content: IPost[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    pageNumber: number
  }
}

function Posts() {
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const { data, fetchNextPage } = useInfiniteQuery<IPostsPageImpl>(['posts'], fetchPostsInfinite)

  const onIntersect = ([]: IntersectionObserverEntry[]) => fetchNextPage()
  useObserver({ target: loadMoreRef, onIntersect })

  useEffect(() => {
    const scrollY = localStorage.getItem('post_scrollY')
    if (scrollY && scrollY !== '0') {
      window.scrollTo(0, parseInt(scrollY))
    }
  }, [])

  return (
    <PostList>
      {data?.pages.map((group) =>
        group?.content.map((post) => {
          return <PostBox key={post.postId} {...post} />
        })
      )}
      <div ref={loadMoreRef} />
    </PostList>
  )
}

export default Posts
