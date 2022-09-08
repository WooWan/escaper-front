import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSignUp } from "../../api/signUp";
import { ISignUpForm, ISignUpRequest } from "../../interfaces/member";
import TextButton from "../core/button/text-button/TextButton";
import { SubtitleFont, TitleFont } from "../core/font/TitleFonts";
import {
  Container,
  FormInputContainer,
  Info,
  Input,
  InputBox,
  StyledForm,
} from "./SignUp.style";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
interface IProps {
  email?: string | string[];
}
function SignUpForm({ email }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const { mutate: signUp } = useSignUp();

  const onSubmit = async (data: ISignUpForm) => {
    const user = { email, ...data };
    signUp(user);
  };
  return (
    <Container>
      <Info>
        <TitleFont fontSize="2.5rem">회원가입</TitleFont>
        <SubtitleFont fontSize="1.125rem">
          사용할 닉네임을 설정해주세요!
        </SubtitleFont>
      </Info>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormInputContainer>
          <SubtitleFont fontSize="1rem">닉네임*</SubtitleFont>
          <InputBox>
            <Input {...register("nickname", { required: true })} />
          </InputBox>
          {errors.nickname && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </FormInputContainer>
        <ButtonWrapper>
          <TextButton buttonType="primary" size="100%">
            가입하기
          </TextButton>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  );
}

export default SignUpForm;
