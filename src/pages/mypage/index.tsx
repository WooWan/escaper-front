import SidebarLayout from '@/src/components/layout/SidebarLayout'
import React, { ReactElement } from 'react'
import Image from 'next/image'
import { Pencil } from 'lucide-react'
import { useSession } from 'next-auth/react'

const MyPage = () => {
  const { data } = useSession()

  return (
    <section className="flex justify-center pt-8">
      <div className="w-1/2">
        <h2 className="pb-8 text-h1">내 정보 수정</h2>
        <ul className="flex flex-col gap-y-10">
          <div className="flex items-center gap-x-6 border-b-[1px] border-b-gray-300 px-1 pb-6">
            <span className="text-s3">이미지</span>
            <div className="relative h-28 w-28 cursor-pointer rounded-full border-2 shadow-sm">
              <Image
                src={
                  'https://adhgloqjygnspxqhqpmq.supabase.co/storage/v1/object/public/escape-theme/user/user-basic.png'
                }
                fill
                alt=""
              />
              <Pencil className="absolute bottom-1 right-1" />
            </div>
          </div>
          <li className="flex flex-col gap-y-2 border-b-[1px] border-b-gray-300 px-1 pb-6">
            <div className="flex justify-between">
              <div className="flex gap-x-6">
                <span className="text-s3">닉네임</span>
                <input type="text" value={data?.user?.name} />
              </div>
              <button>수정</button>
            </div>
            <span className="text-b2 text-gray-500">
              포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MyPage

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
}
