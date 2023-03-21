import Link from 'next/link'
import React from 'react'
import { Album, Home, LogIn, TrendingUp, Settings } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <nav className="sticky top-0 min-h-screen min-w-[88px] border-r-[1px] border-solid border-r-slate-100 pt-10 md:min-w-[240px] md:pl-6">
      <div>
        <ul className="flex flex-col gap-y-6 border-b-[1px] border-r-slate-100 pb-6">
          <Link href="/home">
            <li
              className={clsx('flex cursor-pointer flex-col items-center gap-x-4 border-r-[4px] md:flex-row', {
                'border-main500': router.asPath === '/home',
              })}
            >
              <Home
                color={'black'}
                size={24}
                className={clsx('shrink-0 ', { 'border-main500': router.asPath === '/home' })}
              />
              <span className="hidden md:inline">Home</span>
            </li>
          </Link>
          <Link href="/theme">
            <li className="flex flex-col items-center gap-x-4 md:flex-row">
              <Album color={'black'} size={24} className="shrink-0" />
              <span className="hidden md:inline">Bookmark</span>
            </li>
          </Link>
          <li className="flex flex-col items-center gap-x-4 md:flex-row">
            <TrendingUp color={'black'} size={24} className="shrink-0" />
            <span className="hidden md:inline">트렌드</span>
          </li>
        </ul>
        <div className="py-6">
          <ul className="flex flex-col gap-y-6 border-b-[1px] border-r-slate-100 pb-6">
            <li
              className="flex cursor-pointer flex-col items-center gap-x-4 md:flex-row"
              onClick={() => (session ? signOut() : signIn('google'))}
            >
              <LogIn color={'black'} size={24} className="shrink-0" />
              {session ? (
                <span className="hidden md:inline">로그아웃</span>
              ) : (
                <span className="hidden md:inline">로그인</span>
              )}
            </li>
            <Link href="/mypage">
              <li className="flex flex-col items-center gap-x-4 md:flex-row">
                <Settings />
                <span className="hidden md:inline">마이 페이지</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
