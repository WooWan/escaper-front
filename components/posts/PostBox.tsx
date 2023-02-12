import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { IPost } from '@/types'
import { themedPalette } from '@/styles/theme'
import Font from '@/components/core/font/Font'

const Post = styled.li`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
  color: ${themedPalette.text1};
`

const AppointmentDate = styled.section`
  display: flex;
  column-gap: 0.3rem;
  padding-top: 0.25rem;
`
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`

function PostBox(props: IPost) {
  const { postId, title, appointmentDate, themeResponse } = props

  const storeScrollY = (scrollY: number) => {
    localStorage.setItem('post_scrollY', scrollY.toString())
  }

  return (
    <>
      <Link href="/about">Home</Link>
      <Link href={`/post/${postId}`}>
        <Post onClick={() => storeScrollY(window.scrollY)}>
          <Image src="/images/escape.jpeg" width={230} height={300} alt={themeResponse.name} />
          <Title>{title}</Title>
          <AppointmentDate>
            <Font fontType="content">방탈출 예정일</Font>
            <Font fontType="content">|</Font>
            <Font fontType="content">{appointmentDate}</Font>
          </AppointmentDate>
        </Post>
      </Link>
    </>
  )
}

export default PostBox
