import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IThemeInfo, IThemesType } from "../../../../interfaces";
import AngleRight from "../../../icons/angle-right";
import AngleLeft from "../../../icons/angle-left";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularTheme, fetchThemeByGenre } from "../../../../api/theme";
import ThemeBox from "../../theme-box/ThemeBox";
import { TitleFont } from "../../../core/font/TitleFonts";
import { Button, Container, Row, Slide, TitleWrapper } from "./Slider.style";
import useElementSize from "../../../../utils/hooks/useElementSize";

const OFFSET = 5;

interface GenreType {
  [key: string]: string;
}
const genreTitle: GenreType = {
  popular: "현재 인기 있는 테마를 즐겨보세요!",
  공포: "일상의 지루함에는 오싹한 탈출!",
  로맨스: "두근두근한 방탈출의 경험",
  미스터리: "미스터리한 방에 어떤 것이 숨겨져 있을까요?",
};

function Slider({ genre }: IThemesType) {
  const { data } = useQuery<IThemeInfo[]>(
    genre === "popular" ? ["popular"] : [genre],
    genre === "popular" ? fetchPopularTheme : () => fetchThemeByGenre(genre)
  );

  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);

  const sliderRef = useRef<HTMLLIElement>(null);
  const size = useElementSize({ ref: sliderRef });

  const handleTitle = (genre: string): string => {
    return genreTitle[genre];
  };
  const rowVariants = {
    entry: (isBack: boolean) => ({
      x: isBack ? -(size.width + 5) : size.width + 5,
    }),
    center: {
      x: 0,
    },
    exit: (isBack: boolean) => ({
      x: isBack ? size.width + 5 : -(size.width + 5),
    }),
  };
  const totalMovies = data?.length;
  const maxIndex = totalMovies && Math.floor(totalMovies / OFFSET);
  const nextSlide = () => {
    if (leaving) return;
    setBack(false);
    toggleLeaving();
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    toggleLeaving();
  };
  const prevSlide = () => {
    if (leaving) return;
    setBack(true);
    toggleLeaving();
    setIndex((prev) => (prev === 0 && maxIndex ? maxIndex : prev - 1));
    toggleLeaving();
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const setVisibleOn = () => setVisible(true);
  const setVisibleOff = () => setVisible(false);

  return (
    <Container>
      <TitleWrapper>
        <TitleFont fontSize="1.4rem">{handleTitle(genre)}</TitleFont>
      </TitleWrapper>
      <Slide
        onMouseOver={setVisibleOn}
        onMouseOut={setVisibleOff}
        ref={sliderRef}
      >
        <Button onClick={prevSlide} visible={visible}>
          <AngleLeft />
        </Button>
        <AnimatePresence initial={false} custom={back}>
          <Row
            custom={back}
            variants={rowVariants}
            transition={{ type: "tween", duration: 1 }}
            initial="entry"
            animate="center"
            exit="exit"
            key={index}
          >
            {data
              ?.slice(OFFSET * index, OFFSET * index + OFFSET)
              .map((theme) => (
                <ThemeBox key={theme.themeId} {...theme} />
              ))}
          </Row>
        </AnimatePresence>
        <Button onClick={nextSlide} visible={visible}>
          <AngleRight />
        </Button>
      </Slide>
    </Container>
  );
}

export default Slider;
