import type { NextPage } from 'next'
import Posts from '../components/posts/Posts'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data } = useSession()
  return (
    <div>
      <Head>
        <title>Room escaper</title>
      </Head>
      {/* <Posts /> */}
    </div>
  )
}

export default Home
