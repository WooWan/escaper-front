import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-position: center center;
  height: 400px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
  border-radius: 0.5rem;
`;

export const CardContent = styled.section`
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
