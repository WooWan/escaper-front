import Sliders from "../../components/theme/slider/SlidersWrapper";
import { IThemesType } from "../../interfaces";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchPopularTheme, fetchThemeTypes } from "../../api/theme";

function Theme() {
  const { data } = useQuery<IThemesType[]>(["themeTypes"], fetchThemeTypes);

  return <Sliders data={data} />;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["popular"], fetchPopularTheme);
  // await queryClient.fetchQuery(["themeTypes"], fetchThemeTypes);

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default Theme;
