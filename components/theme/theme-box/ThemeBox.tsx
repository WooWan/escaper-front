import Link from "next/link";
import { IThemeInfo } from "../../../interfaces";
import ThemeCard from "../theme-card/ThemeCard";

function ThemeBox(theme: IThemeInfo) {
  return (
    <Link href={`/theme/${theme.themeId}`} passHref>
      <ThemeCard href={`/theme/${theme.themeId}`} theme={theme} />
    </Link>
  );
}

ThemeBox.displayName = "ThemeBox";

export default ThemeBox;
