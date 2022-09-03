import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { IPost } from "../../interfaces";

const Post = styled.li`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;
const AppointmentDate = styled.section`
  display: flex;
  column-gap: 0.3rem;
  padding-top: 0.25rem;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

function PostBox(props: IPost) {
  const { postId, title, appointmentDate, themeResponse } = props;

  const storeScrollY = (scrollY: number) => {
    localStorage.setItem("post_scrollY", scrollY.toString());
  };

  return (
    <Link href={`post/${postId}`} passHref>
      <Post onClick={() => storeScrollY(window.scrollY)}>
        <Image
          src={themeResponse.imageURL}
          width={230}
          height={300}
          alt={themeResponse.name}
        />
        <Title>{title}</Title>
        <AppointmentDate>
          <span>방탈출 예정일</span>
          <span>|</span>
          <span>{appointmentDate}</span>
        </AppointmentDate>
      </Post>
    </Link>
  );
}

export default PostBox;
