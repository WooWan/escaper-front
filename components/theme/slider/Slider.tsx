import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import {ITheme, IThemesType} from "../../../types";
import Link from "next/link";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import AngleRight from "../../icons/angle-right";
import AngleLeft from "../../icons/angle-left";
import {useQuery} from "@tanstack/react-query";
import {fetchPopularTheme, fetchThemeByGenre} from "../../../utils/theme";

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-image: url(https://yologuys.com/Escape_img/theme/3489.jpg);
  background-size: cover;
  background-position: center center;
  height: 400px;
`
const Button = styled.div<{ visible: boolean; }>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  justify-content: center;
  transition: 1s linear;
  z-index: 20;
  width: 30px;
  height: 400px;
`;

const Slide = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 450px;
  &:hover ${Button}{
    cursor: pointer;
    background-color: black;
    color: white;
    opacity: 0.6;
    visibility: visible;
  }
`


const OFFSET = 6;

function Slider({genre}: IThemesType) {

  const {data} = useQuery<ITheme[]>(["theme", genre],
    genre === "popular"
      ? fetchPopularTheme
      : () => fetchThemeByGenre(genre));
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const size = useWindowSize();
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
  const nextSlide = () => {
    if (leaving) return;
    setBack(false);
    toggleLeaving();
    const totalMovies = data?.length;
    const maxIndex = totalMovies && Math.floor(totalMovies / OFFSET);
    setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
    toggleLeaving()
  };
  const prevSlide = () => {
    if (leaving) return;
    setBack(true);
    toggleLeaving();
    setIndex((prev) => prev === 0 ? 0 : prev - 1);
    toggleLeaving()
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const setVisibleOn = () => setVisible(true);
  const setVisibleOff = () => setVisible(false);

  return (
    <div>
      <span>{genre}</span>
      <Slide onMouseOver={setVisibleOn} onMouseOut={setVisibleOff}>
        <Button onClick={prevSlide} visible={visible}>
          <AngleLeft/>
        </Button>
        <AnimatePresence initial={false} custom={back}>
          <Row
            custom={back}
            onClick={nextSlide}
            variants={rowVariants}
            transition={{type: "tween", duration: 1}}
            initial="entry" animate="center" exit="exit"
            key={index}
          >
            {
              data?.slice(OFFSET * index, OFFSET * index + OFFSET)
                .map((theme) => (
                  <Link key={theme.id} href={`/theme/${theme.id}`} passHref>
                    <Box/>
                  </Link>
                ))
            }
          </Row>
        </AnimatePresence>
        <Button onClick={nextSlide} visible={visible}>
          <AngleRight/>
        </Button>
      </Slide>
    </div>

  );
}

export default Slider;