import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  margin: 1.25rem 0rem;
`;
export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  width: 99.5%;
  height: 100%;
`;

export const Button = styled.button<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  justify-content: center;
  transition: 1s linear;
  z-index: 20;
  width: 30px;
  height: auto;
`;

export const Slide = styled.li`
  position: relative;
  display: flex;
  min-height: 22.5rem;
  justify-content: space-between;
  align-content: center;
  overflow-x: hidden;
  &:hover ${Button} {
    cursor: pointer;
    background-color: black;
    color: white;
    opacity: 0.6;
    visibility: visible;
  }
  cursor: pointer;
`;

export const TitleWrapper = styled.header`
  padding: 0.75rem 0.5rem;
`;
