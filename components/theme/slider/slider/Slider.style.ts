import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 25rem;
  height: 25rem;
`;
export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  width: 99.5%;
`;

export const Button = styled.button<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  justify-content: center;
  transition: 1s linear;
  margin: auto 0;
  z-index: 20;
  width: 30px;
  height: 100%;
`;

export const Slide = styled.li`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-content: center;
  overflow-x: hidden;
  padding: 2rem 0;
  cursor: pointer;

  //overflow 시에 스크롤 바 hidden
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &:hover ${Button} {
    background-color: black;
    color: white;
    opacity: 0.6;
    visibility: visible;
  }
`;

export const TitleWrapper = styled.header`
  padding: 0.75rem 0.5rem;
`;
