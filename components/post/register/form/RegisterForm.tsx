import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddPost } from "../../../../api/post/register";
import { IForm } from "../../../../interfaces/post";
import TextButton from "../../../core/button/text-button/TextButton";
import Counter from "../counter/Counter";
import DatePicker from "../date-picker/DatePicker";
import WysiwygEditor from "../editor/WysiwygEditor";
import SelectInput from "../input/SelectInput";
import {
  ButtonWrapper,
  Container,
  Form,
  Input,
  SubmitButton,
} from "./RegisterForm.style";

function PostRegister() {
  const { register, handleSubmit, control } = useForm<IForm>();
  const router = useRouter();
  const [content, setContent] = useState<string | undefined>("");
  const { mutate: addPost } = useAddPost();
  const [participation, setParticipation] = useState(1);
  const onSubmit = async (data: IForm) => {
    const post = { ...data, content, participation };
    addPost(post, {
      onSuccess: ({ data }) => {
        router.push(`/post/${data}`);
      },
    });
  };
  const handleInputChange = (content?: string) => {
    setContent(content);
  };
  const incrementCount = () => {
    setParticipation((participation) => participation + 1);
  };
  const decrementCount = () => {
    setParticipation((participation) => participation - 1);
  };

  const onCancel = () => {
    router.push("/");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <main>
          <Input
            {...register("title")}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </main>
        <SelectInput control={control} />
        <DatePicker control={control} />
        <Counter
          participation={participation}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
        <WysiwygEditor onChange={handleInputChange} />
        <ButtonWrapper>
          <TextButton onClick={onCancel} buttonType={"basic"}>
            취소하기
          </TextButton>
          <SubmitButton buttonType={"primary"}>글 등록</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Container>
  );
}

export default PostRegister;
