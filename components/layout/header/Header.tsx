import SearchBar from '@/components/layout/header/SearchBar'
import Link from 'next/link'
import React from 'react'
import { User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown/DropdownMenu'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex max-h-[100px] items-center justify-between px-8 py-4">
      <Link href="/home">
        <div>
          <span className="text-h2 text-main500">Escapers</span>
          {/* <Image src="/images/escape.jpeg" width={40} height={40} alt="logo" /> */}
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <SearchBar />
        <div className="cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/inventory')}>방탈출 리뷰</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/mypage')}>마이 페이지</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
