import PostRegister from '@/src/components/post/register/form/RegisterForm'
import React, { ReactElement } from 'react'
import SidebarLayout from '@/src/components/layout/SidebarLayout'

function Register() {
  return <PostRegister />
}

// // nested layout
Register.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout>{page}</SidebarLayout>
  // return { page }
}

export default Register
