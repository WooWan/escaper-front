import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-position: center center;
  height: 400px;
  cursor: pointer;
  z-index: 10;
  background-color: #f9f9fb;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
