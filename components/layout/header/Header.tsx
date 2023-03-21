import SearchBar from '@/components/layout/header/SearchBar'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex max-h-[100px] items-center justify-between py-4 px-8">
      <Link href="/home">
        <div>
          <span className="text-h2 text-main500">Escapers</span>
          {/* <Image src="/images/escape.jpeg" width={40} height={40} alt="logo" /> */}
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <SearchBar />
        <div>icon</div>
      </div>
    </header>
  )
}

export default Header
