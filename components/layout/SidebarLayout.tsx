import React from 'react'
import Sidebar from './sidebar/Sidebar'

type Props = {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[240px_1fr] gap-x-4 ">
      <Sidebar />
      {children}
    </div>
  )
}
