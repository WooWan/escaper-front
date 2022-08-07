import {GetStaticPropsContext} from "next";
import {ITheme} from "../../types";
import {httpClient} from "../../utils/httpClient";
import {fetchThemeById} from "../../utils/theme";
import {useState} from "react";

interface IProps {
  theme: ITheme
}

function ThemePage(props:IProps) {
  const [theme, setTheme] = useState(props.theme)

  return (
    <div>
      <h1>sdfds</h1>
      <h1>{theme.name}</h1>
    </div>
  )
    ;
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