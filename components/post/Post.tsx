import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IPost } from "../../interfaces";
import { selectUser } from "../../store/slices/user";
import { ContentFont, SubtitleFont, TitleFont } from "../core/font/TitleFonts";
import { StarIcon } from "../core/rating-bar/star-icon";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  Header,
  InfoSection,
  InfoWrapper,
  PostWrapper,
  StarWrapper,
  ThemeRating,
  ThemeWrapper,
} from "./Post.style";

interface IProps {
  data: IPost;
}
function Post({ data }: IProps) {
  const router = useRouter();
  const postId = router.query.id;

  const { user } = useSelector(selectUser);
  const {
    memberResponse,
    title,
    content,
    themeResponse,
    appointmentDate,
    participation,
    createdDate,
  } = data;

  const userId = user?.id;
  const postMemberId = memberResponse?.id;
  const username = memberResponse?.username;

  const handleEdit = () => {
    router.push(
      { pathname: "/post/register", query: { data: JSON.stringify(data) } },
      `/post/register`
    );
  };
  return (
    <Container>
      <TitleFont fontSize="2rem">{title}</TitleFont>
      <Header>
        <ContentFont fontSize="1rem">
          {username} | {new Date(createdDate).toLocaleDateString()}
        </ContentFont>
        {userId === postMemberId ? (
          <ButtonWrapper>
            <button onClick={handleEdit}>수정</button>
            <button>삭제</button>
          </ButtonWrapper>
        ) : null}
      </Header>
      <InfoSection>
        <ThemeWrapper>
          <Image
            src={themeResponse?.imageURL}
            objectFit="cover"
            width={230}
            height={300}
            alt="escape cafe theme"
          />
          <SubtitleFont fontSize="1rem">
            {themeResponse?.cafeResponse?.name}
          </SubtitleFont>
          <ThemeRating>
            <TitleFont fontSize="1.25rem">{themeResponse?.name}</TitleFont>
            <StarWrapper>
              <StarIcon style={{ color: "#ffbc0b" }} />
              <span>({themeResponse?.rating.toFixed(1)})</span>
            </StarWrapper>
          </ThemeRating>
        </ThemeWrapper>
        <PostWrapper>
          <InfoWrapper>
            <TitleFont fontSize="1.25rem" color="gray">
              모집 인원
            </TitleFont>
            <TitleFont fontSize="1rem">{participation}</TitleFont>
          </InfoWrapper>
          <InfoWrapper>
            <TitleFont fontSize="1.25rem" color="gray">
              방탈출 예정일
            </TitleFont>
            <TitleFont fontSize="1rem">{appointmentDate}</TitleFont>
          </InfoWrapper>

          <InfoWrapper>
            <TitleFont fontSize="1.25rem" color="gray">
              카페
            </TitleFont>
            <TitleFont fontSize="1rem">
              {themeResponse?.cafeResponse?.name}
            </TitleFont>
          </InfoWrapper>
          <InfoWrapper>
            <TitleFont fontSize="1.25rem" color="gray">
              방탈출 테마
            </TitleFont>
            <TitleFont fontSize="1rem">{themeResponse?.name}</TitleFont>
          </InfoWrapper>
        </PostWrapper>
      </InfoSection>
      <ContentWrapper>{content}</ContentWrapper>
    </Container>
  );
}

export default Post;
