import { GetStaticPropsContext } from "next";
import { IReview, ITheme } from "../../interfaces";
import { httpClient } from "../../utils/httpClient";
import { fetchReview, fetchThemeById } from "../../utils/theme";
import styled from "styled-components";
import ThemeInfo from "../../components/theme/ThemeInfo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ReviewRegister from "../../components/review/review-register";
import Reviews from "../../components/review/Reviews";

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
  theme: ITheme;
}

function ThemePage({ theme }: IProps) {
  const router = useRouter();
  const themeId = router.query.id;

  const { data: reviews } = useQuery<IReview[]>(["review", themeId], () =>
    fetchReview(themeId)
  );
  return (
    <Container>
      <ThemeInfo theme={theme} />
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
  console.log(theme);
  return { props: { theme }, revalidate: 3600 };
}

export async function getStaticPaths() {
  const response = await httpClient.get<ITheme[]>("/api/themes");
  const data = await response.data;
  const paths = data?.map((theme) => ({ params: { id: theme.id.toString() } }));

  return { paths, fallback: "blocking" };
}

export default ThemePage;
