import { GetStaticPropsContext } from "next";
import { IReview } from "../../interfaces";
import {
  fetchReview,
  fetchThemeById, fetchThemeList,
  fetchThemeRatingOfUser,
} from "../../api/theme";
import styled from "styled-components";
import ThemeInfo from "../../components/theme/ThemeInfo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ReviewRegister from "../../components/review/review-register";
import Reviews from "../../components/review/Reviews";
import { IThemeDetail } from "../../interfaces/theme";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/user";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  height: 100%;
`;

const ReviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

interface IProps {
  theme: IThemeDetail;
}

function ThemePage({theme}:IProps) {
  const router = useRouter();
  const themeId = router.query.id;
  const { user } = useSelector(selectUser);
  const memberId = user?.id;

  const { data } = useQuery(
    ["rating", memberId, themeId],
    () => fetchThemeRatingOfUser(themeId, memberId),
    { enabled: !!memberId }
  );
  const memberRating = data?.memberRating;

  const { data: reviews } = useQuery<IReview[]>(["review", themeId], () =>
    fetchReview(themeId)
  );
  return (
    <Container>
      <ThemeInfo theme={theme} memberRating={memberRating} />
      <ReviewWrapper>
        <ReviewRegister />
        <Reviews reviews={reviews} />
      </ReviewWrapper>
    </Container>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const theme = await fetchThemeById(id);
  return { props: { theme }, revalidate: 3600 };
}

export async function getStaticPaths() {
  const themeList = await fetchThemeList();
  const paths = themeList?.map((theme) => ({ params: { id: theme.id.toString() } }));
  return { paths, fallback: "blocking" };
}

export default ThemePage;
