import Sliders from "../../components/theme/slider/SlidersWrapper";
import { IThemesType } from "../../interfaces";
import { useQuery } from "@tanstack/react-query";
import { fetchThemeTypes } from "../../api/theme";
import { Suspense } from "react";

function Theme() {
  const { data } = useQuery<IThemesType[]>(["themeTypes"], fetchThemeTypes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sliders data={data} />
    </Suspense>
  );
}
export default Theme;
