import {GetStaticPropsContext} from "next";
import {ITheme} from "../../types";
import {httpClient} from "../../utils/httpClient";
import {fetchThemeById} from "../../utils/theme";
import styled from "styled-components";
import ThemeInfo from "../../components/theme/ThemeInfo";

interface IProps {
  theme: ITheme
}

const ThemeWrapper= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 920px;
  margin: 0 auto;
  height: 100%;
`



function ThemePage({theme}:IProps) {
  return (
    <ThemeWrapper>
     <ThemeInfo theme={theme}/>
    </ThemeWrapper>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id ?? "";
  const theme = await fetchThemeById(id.toString());

  return {props: {theme}, revalidate: 3600};
}

export async function getStaticPaths() {
  const response = await httpClient.get<ITheme[]>("/api/themes");
  const data = await response.data;
  const paths = data?.map(theme => ({ params: {id: theme.id.toString()}}) )

  return {paths, fallback: "blocking"}
}

export default ThemePage;