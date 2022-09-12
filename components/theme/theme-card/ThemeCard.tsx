import React, { forwardRef } from "react";
import { ContentFont, TitleFont } from "../../core/font/TitleFonts";
import { StarIcon } from "../../core/rating-bar/star-icon";
import { Box, CardContent, Header, StarWrapper } from "./ThemeCard.style";
import Image from "next/image";
import { IThemeInfo } from "../../../interfaces";

interface Props {
  href: string;
  theme: IThemeInfo;
}
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

const ThemeCard = forwardRef<HTMLAnchorElement, Props>(
  ({ href, theme }, ref) => {
    const { imageURL, name, rating, cafeResponse } = theme;

    return (
      <a href={href} ref={ref}>
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
              <ContentFont fontSize="1rem">{cafeResponse.name}</ContentFont>
              <TitleFont>{name}</TitleFont>
            </Header>
            <StarWrapper>
              <StarIcon style={{ color: "#ffbc0b" }} />
              <span>({rating.toFixed(1)})</span>
            </StarWrapper>
          </CardContent>
        </Box>
      </a>
    );
  }
);

ThemeCard.displayName = "ThemeCard";

export default ThemeCard;
