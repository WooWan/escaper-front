import styled from "styled-components";
import Image from "next/image";
import { IPost } from "../../interfaces";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const InfoWrapper = styled.li`
  display: flex;
  gap: 8px;
  padding: 20px 0;
`;
const InfoTitle = styled.span`
  font-size: 18px;
  color: gray;
  font-weight: bold;
`;
const InfoContent = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
const PostInfo = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;
const Title = styled.span`
  text-align: left;
  font-size: 32px;
  font-weight: bold;
`;

interface IProps {
  data: IPost;
}

function Post({ data }: IProps) {
  const { title } = data;

  return (
    <Container>
      <Title>{title}</Title>
      <InfoSection>
        <PostInfo>
          <InfoWrapper>
            <InfoTitle>모집 인원</InfoTitle>
            <InfoContent>3</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>연락 방법</InfoTitle>
            <InfoContent>3</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>방탈출 예정일</InfoTitle>
            <InfoContent>3월 21일</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>방탈출 모집</InfoTitle>
            <InfoContent>3월 21일</InfoContent>
          </InfoWrapper>
        </PostInfo>
        <Image
          src="/images/escape.jpeg"
          objectFit="cover"
          width={230}
          height={300}
          alt="escape cafe theme"
        />
      </InfoSection>
    </Container>
  );
}

export default Post;
