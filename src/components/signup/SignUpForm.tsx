import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useSignUp } from '@/src/api/signUp'
import { ISignUpForm } from '@/src/types/member'
import Font from '@/src/components/core/font/Font'
import { Container, FormInputContainer, Info, Input, InputBox, StyledForm } from './SignUp.style'
import Button from '../core/button/Button'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`
interface IProps {
  email?: string | string[]
}
function SignUpForm({ email }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>()

  const { mutate: signUp } = useSignUp()

  const onSubmit = async (data: ISignUpForm) => {
    const user = { email, ...data }
    signUp(user)
  }
  return (
    <Container>
      <Info>
        <Font fontType="title" fontSize="2.5rem">
          회원가입
        </Font>
        <Font fontType="subtitle">사용할 닉네임을 설정해주세요!</Font>
      </Info>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInputContainer>
          <Font fontType="subtitle" fontSize="1rem">
            닉네임*
          </Font>
          <InputBox>
            <Input {...register('nickname', { required: true })} />
          </InputBox>
          {errors.nickname && <span style={{ color: 'red' }}>This field is required</span>}
        </FormInputContainer>
        <ButtonWrapper>
          <Button buttonType="primary">가입하기</Button>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  )
}

export default SignUpForm
