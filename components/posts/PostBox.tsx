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
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

function PostBox(props: IPost) {
  const { postId, title, appointmentDate } = props;
  const storeScrollY = (scrollY: number) => {
    localStorage.setItem("post_scrollY", scrollY.toString());
  };
  return (
    <Link href={`post/${postId}`} passHref>
      <Post onClick={() => storeScrollY(window.scrollY)}>
        <Image
          src="/images/escape.jpeg"
          width={230}
          height={300}
          alt="escape cafe theme"
        />
        <Title>{title}</Title>
        {/*<span>{themeList[0].name}</span>*/}
        <AppointmentDate>
          <span>방탈출 예정일 |</span>
          <span>{appointmentDate.toString()}</span>
        </AppointmentDate>
      </Post>
    </Link>
  );
}

export default PostBox;
