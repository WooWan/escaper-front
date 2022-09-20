import PostBox from "./PostBox";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { IPost } from "../../interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPostsInfinite } from "../../utils/posts";
import { useObserver } from "../../utils/hooks/useObserver";

const PostList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto;
`;

interface IPostsPageImpl {
  content: IPost[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
  };
}

function Posts() {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<IPostsPageImpl>(
    ["posts"],
    fetchPostsInfinite
  );

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => fetchNextPage();
  useObserver({ target: loadMoreRef, onIntersect });

  useEffect(() => {
    const scrollY = localStorage.getItem("post_scrollY");
    if (scrollY && scrollY !== "0") {
      window.scrollTo(0, parseInt(scrollY));
    }
  }, []);

  return (
    <PostList>
      {data?.pages.map((group) =>
        group?.content.map((post) => {
          return <PostBox key={post.postId} {...post} />;
        })
      )}
      <div ref={loadMoreRef} />
    </PostList>
  );
}

export default Posts;
