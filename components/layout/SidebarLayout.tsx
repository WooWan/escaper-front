import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from '@/components/layout/header/Header'

type Props = {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[80px_1fr] gap-x-4 md:grid-cols-[220px_1fr]">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
