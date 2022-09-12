import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "../rating-bar/star-icon";
import { IThemeInfo } from "../../../interfaces";
import { SubtitleFont, TitleFont } from "../font/TitleFonts";
import { Header, StarWrapper, Box } from "./ThemeBox.style";

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    y: -30,
    transition: {
      delay: 0.4,
      duration: 0.2,
      type: "tween",
    },
  },
};

function ThemeBox({
  rating,
  name,
  cafeResponse,
  imageURL,
  themeId,
}: IThemeInfo) {
  return (
    <Link href={`/theme/${themeId}`}>
      <a>
        <Box
          variants={boxVariants}
          initial="normal"
          whileHover="hover"
          transition={{ type: "tween" }}
        >
          <Image
            src={imageURL}
            width={"250"}
            height={"310"}
            alt="theme-image"
          />
          <div>
            <Header>
              <SubtitleFont fontSize="1rem">{cafeResponse.name}</SubtitleFont>
              <TitleFont fontSize="1.2rem">{name}</TitleFont>
            </Header>
            <StarWrapper>
              <StarIcon style={{ color: "#ffbc0b" }} />
              <span>({rating.toFixed(1)})</span>
            </StarWrapper>
          </div>
        </Box>
      </a>
    </Link>
  );
}

ThemeBox.displayName = "ThemeBox";

export default ThemeBox;
