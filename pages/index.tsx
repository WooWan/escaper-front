import type { NextPage } from "next";
import Posts from "../components/posts/Posts";
import Head from "next/head";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchPostsInfinite } from "../utils/posts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Room escaper</title>
      </Head>
      <Posts />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(["posts"], fetchPostsInfinite);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
