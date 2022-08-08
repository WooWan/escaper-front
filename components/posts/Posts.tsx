import PostItem from "./PostItem";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {IPost} from "../../types";
import {useInfiniteQuery} from "@tanstack/react-query";
import {fetchPostsInfinite} from "../../utils/posts";


const PostList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  
`

interface IPostsPageImpl {
  content : IPost[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    pageNumber: number
  };

}

function Posts() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const {data, fetchNextPage} = useInfiniteQuery<IPostsPageImpl>(["postList"],
    fetchPostsInfinite,
    {
      getNextPageParam: ((lastPage) => {
          const {last} = lastPage;
          if(last) return;
          return lastPage.pageable.pageNumber + 1;
        }
      )
    }
  );

  const handleObserver = ([entry]:IntersectionObserverEntry[]) => {
    entry.isIntersecting && fetchNextPage();
  };
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef?.current) observer.observe(loadMoreRef?.current)
    return () => {
      if (loadMoreRef?.current) observer.unobserve(loadMoreRef?.current);
    }
  });
  useEffect(() => {
    const scrollY = localStorage.getItem("post_scrollY");
    if (scrollY && scrollY !== "0") {
      window.scrollTo(0, parseInt(scrollY));
    }
  },[]);

  return (
    <PostList>
      {
        data?.pages.map((group) =>
          group?.content.map(post => {
            return <PostItem key={post.postId}{...post}/>
          })
        )
      }
      <div ref={loadMoreRef}/>
    </PostList>
  );
}

export default Posts;