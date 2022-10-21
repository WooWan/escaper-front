import Link from "next/link";
import { IThemeInfo } from "../../../interfaces";
import Image from "next/image";
import { Box, CardContent, Header, StarWrapper } from "./ThemeBox.style";
import Font from "../../core/font/Font";
import { StarIcon } from "../../core/rating-bar/star-icon";

function ThemeBox({
  name,
  rating,
  imageURL,
  cafeResponse,
  themeId,
}: IThemeInfo) {
  const boxVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      y: -20,
      transition: {
        delay: 0.4,
        duration: 0.2,
        type: "tween",
      },
    },
  };
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
          <CardContent>
            <Header>
              <Font fontType="content">{cafeResponse.name}</Font>
              <Font fontType="subtitle">{name}</Font>
            </Header>
            <StarWrapper>
              <StarIcon style={{ color: "#ffbc0b" }} />
              <Font fontType="content">({rating.toFixed(1)})</Font>
            </StarWrapper>
          </CardContent>
        </Box>
      </a>
    </Link>
  );
}

export default ThemeBox;
