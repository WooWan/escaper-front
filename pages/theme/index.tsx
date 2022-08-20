import Sliders from "../../components/theme/slider/SlidersWrapper";
import { IThemesType } from "../../interfaces";
import { useQuery } from "@tanstack/react-query";
import { fetchThemeTypes } from "../../utils/theme";

function Theme() {
  const { data } = useQuery<IThemesType[]>(["themeTypes"], fetchThemeTypes);

  return <Sliders data={data} />;
}

export default Theme;
