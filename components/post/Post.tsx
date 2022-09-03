import Image from "next/image";
import { IPost } from "../../interfaces";
import { SubtitleFont, TitleFont } from "../core/font/TitleFonts";
import { StarIcon } from "../core/rating-bar/star-icon";
import {
  Container,
  ContentWrapper,
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
  const { title, content, themeResponse, appointmentDate, participation } =
    data;

  return (
    <Container>
      <TitleFont fontSize="2rem">{title}</TitleFont>
      <InfoSection>
        <ThemeWrapper>
          <Image
            src={themeResponse.imageURL}
            objectFit="cover"
            width={230}
            height={300}
            alt="escape cafe theme"
          />
          <SubtitleFont fontSize="1rem">{themeResponse.cafeName}</SubtitleFont>
          <ThemeRating>
            <TitleFont fontSize="1.25rem">{themeResponse.name}</TitleFont>
            <StarWrapper>
              <StarIcon style={{ color: "#ffbc0b" }} />
              <span>({themeResponse.rating.toFixed(1)})</span>
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
            <TitleFont fontSize="1rem">{themeResponse.cafeName}</TitleFont>
          </InfoWrapper>
          <InfoWrapper>
            <TitleFont fontSize="1.25rem" color="gray">
              방탈출 테마
            </TitleFont>
            <TitleFont fontSize="1rem">{themeResponse.name}</TitleFont>
          </InfoWrapper>
        </PostWrapper>
      </InfoSection>
      <ContentWrapper>{content}</ContentWrapper>
    </Container>
  );
}

export default Post;
