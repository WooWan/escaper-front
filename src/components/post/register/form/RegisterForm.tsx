import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAddPost, useEditPost } from '@/src/api/post/register'
import { IPost } from '@/src/types'
import { IForm } from '@/src/types/post'
import SessionStorage from '@/src/service/SessionStorage'
const DatePicker = dynamic(() => import('../date-picker/DatePicker'))
const WysiwygEditor = dynamic(() => import('../editor/WysiwygEditor'))
const SelectInput = dynamic(() => import('../input/SelectInput'))
import { ButtonWrapper, Container, Form, Input } from './RegisterForm.style'
import Button from '../../../core/button/Button'
import Counter from '@/src/components/post/register/counter/Counter'
import PostNew from '@/src/components/post/register/PostNew'

function PostRegister() {
  const router = useRouter()
  const queryPost = router.query?.data as string
  const [sessionStorage] = useState(() => new SessionStorage())
  const sessionPost = sessionStorage.getStorageItem('post')
  useEffect(() => {
    if (queryPost) {
      sessionStorage.setStorageItem('post', queryPost)
    }
    return () => sessionStorage.removeItem('post')
  }, [queryPost, sessionStorage])

  let post: IPost | undefined
  if (queryPost) {
    post = JSON.parse(queryPost)
  } else if (sessionPost) {
    post = JSON.parse(sessionPost)
  }

  const cafe = post?.themeResponse.cafeResponse
  const address = cafe?.address

  const { register, handleSubmit, control } = useForm<IForm>({
    defaultValues: {
      city: address?.city,
      area: address?.area,
      cafe: cafe?.name,
      themeName: post?.themeResponse.name,
    },
  })
  const theme = post?.themeResponse

  const [content, setContent] = useState<string | undefined>(post?.content)

  const { mutate: addPost } = useAddPost()
  const { mutate: editPost } = useEditPost('' + post?.postId)
  const [participation, setParticipation] = useState(post?.participation ?? 1)

  const onSubmit = async (data: IForm) => {
    const body = { ...data, content, participation }
    const postId = post?.postId
    if (!post) {
      addPost(body)
    } else {
      editPost({ ...body, postId })
    }
  }
  const handleInputChange = (content?: string) => {
    setContent(content)
  }
  const incrementCount = () => {
    setParticipation((participation) => participation + 1)
  }
  const decrementCount = () => {
    setParticipation((participation) => participation - 1)
  }

  const onCancel = () => {
    router.push('/')
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/*<main>*/}
        {/*  <Input {...register('title')} type="text" placeholder="제목을 입력해주세요" defaultValue={post?.title} />*/}
        {/*</main>*/}
        {/*<SelectInput control={control} theme={theme} />*/}
        {/*<DatePicker control={control} />*/}
        {/*<Counter participation={participation} incrementCount={incrementCount} decrementCount={decrementCount} />*/}
        {/*<WysiwygEditor onChange={handleInputChange} content={content} />*/}
        <PostNew />
        <ButtonWrapper>
          <Button onClick={onCancel} buttonType="destructive">
            취소하기
          </Button>
          <Button buttonType="primary">글 등록</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  )
}

export default PostRegister
