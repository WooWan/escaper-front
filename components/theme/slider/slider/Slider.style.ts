import { motion } from "framer-motion";
import styled from "styled-components";

export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const Button = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  justify-content: center;
  transition: 1s linear;
  z-index: 20;
  width: 30px;
  height: 400px;
`;

export const Slide = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 450px;
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
