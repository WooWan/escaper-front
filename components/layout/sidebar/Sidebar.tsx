import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Album, Home, LogIn, TrendingUp } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <nav className="sticky top-0 min-h-screen min-w-[240px] max-w-[200px] border-r-[1px] border-solid border-r-slate-100 pt-10 pl-8">
      <div className="pb-8">
        <span className="text-h2 text-main500">Escapers</span>
        {/* <Image src="/images/escape.jpeg" width={40} height={40} alt="logo" /> */}
      </div>
      <div>
        <ul className="flex flex-col gap-y-6 border-b-[1px] border-r-slate-100 pb-6">
          <Link href="/home">
            <li className={clsx('flex cursor-pointer items-center gap-4 border-r-4', { 'border-main500': router.asPath === '/home' })}>
              <Home color={'black'} size={24} className="shrink-0" />
              <span>Home</span>
            </li>
          </Link>
          <Link href="/theme">
            <li className="flex items-center gap-4">
              <Album color={'black'} size={24} className="shrink-0" />
              <span>Bookmark</span>
            </li>
          </Link>
          <li>
            <TrendingUp color={'black'} size={24} className="shrink-0" />
            <span>트렌드</span>
          </li>
        </ul>

        <div className="py-6">
          <ul>
            <li className="flex cursor-pointer gap-4" onClick={() => (session ? signOut() : signIn('google'))}>
              <LogIn color={'black'} size={24} className="shrink-0" />
              {session ? <span>로그아웃</span> : <span>로그인</span>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
