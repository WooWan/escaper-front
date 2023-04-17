import Link from 'next/link'
import React from 'react'
import { Album, Home, LogIn, Settings, Loader2 } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/Dialog'
import { Button } from '@/components/ui/button/Button'
import GoogleIcon from '@/components/icons/GoogleIcon'
import Image from 'next/image'

export default function Sidebar() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false)
  const [isKakaoLoading, setIsKakaoLoading] = React.useState(false)

  return (
    <nav className="sticky top-0 min-h-screen min-w-[88px] border-r-[1px] border-solid border-r-slate-100 pt-10 md:min-w-[220px] md:pl-6">
      <div>
        <ul className="flex flex-col gap-y-6 border-b-[1px] border-r-slate-100 pb-6">
          <Link href="/home">
            <li
              className={clsx('flex cursor-pointer flex-col items-center gap-x-4 md:flex-row', {
                'border-r-4 border-main500': router.asPath === '/home',
              })}
            >
              <Home color={'black'} size={24} />
              <span className="hidden md:inline">홈</span>
            </li>
          </Link>
          <Link href="/inventory">
            <li
              className={clsx('flex cursor-pointer flex-col items-center gap-x-4 md:flex-row', {
                'border-r-4 border-main500': router.asPath === '/inventory',
              })}
            >
              <Album color={'black'} size={24} className="shrink-0" />
              <span className="hidden md:inline">보관함</span>
            </li>
          </Link>
          <Link href="/mypage">
            <li
              className={clsx('flex cursor-pointer flex-col items-center gap-x-4 md:flex-row', {
                'border-r-4 border-main500': router.asPath === '/mypage',
              })}
            >
              <Settings />
              <span className="hidden md:inline">마이 페이지</span>
            </li>
          </Link>
        </ul>
        <div className="py-6">
          <ul className="flex flex-col gap-y-6 border-b-[1px] border-r-slate-100 pb-6">
            <li
              className="flex cursor-pointer flex-col items-center gap-x-4 md:flex-row"
              onClick={() => (session ? signOut() : console.log('dd'))}
            >
              <LogIn color={'black'} size={24} className="shrink-0" />
              {session ? (
                <span className="hidden md:inline">로그아웃</span>
              ) : (
                <span className="hidden md:inline">
                  <Dialog>
                    <DialogTrigger>로그인</DialogTrigger>
                    <DialogContent className="flex flex-col items-center py-12 sm:max-w-[300px]">
                      <DialogHeader>
                        <DialogTitle className="flex justify-center pb-4">간편 로그인</DialogTitle>
                        <DialogDescription className="flex flex-col items-center gap-y-3">
                          <Button
                            className="relative flex w-60 items-center justify-center gap-x-2"
                            variant="outline"
                            size="lg"
                            disabled={isGoogleLoading}
                            onClick={() => {
                              setIsGoogleLoading(true)
                              signIn('google')
                            }}
                          >
                            <span className="absolute left-4">
                              {isGoogleLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              ) : (
                                <GoogleIcon className="mr-2 h-4 w-4" />
                              )}
                            </span>
                            Google으로 계속하기
                          </Button>
                          <Button
                            className="relative flex w-60 justify-center gap-x-2"
                            variant="outline"
                            size="lg"
                            disabled={isGoogleLoading}
                            onClick={() => {
                              setIsKakaoLoading(true)
                              signIn('kakao')
                            }}
                          >
                            <span className="absolute left-4">
                              {isKakaoLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              ) : (
                                <Image src="/images/kakao_login.png" alt="kakao" width={24} height={24} />
                              )}
                            </span>
                            Kakao로 계속하기
                          </Button>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
