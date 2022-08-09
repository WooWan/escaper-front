import type { NextPage } from 'next'
import Posts from "../components/posts/Posts";
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Room escaper</title>
      </Head>
      <Posts/>
    </div>
  );
}

export default Home
