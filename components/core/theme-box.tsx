import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  background-image: url(https://yologuys.com/Escape_img/theme/3489.jpg);
  background-size: cover;
  background-position: center center;
  height: 400px;
  cursor: pointer;
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    y: -30,
    transition: {
      delay: 0.5,
      duration: 0.25,
      type: "tween",
    },
  },
};

interface IProps {
  href: string;
}
const ThemeBox = React.forwardRef<HTMLAnchorElement, IProps>((props, ref) => (
  <a ref={ref} href={props.href}>
    <Box
      variants={boxVariants}
      initial="normal"
      whileHover="hover"
      transition={{ type: "tween" }}
    />
  </a>
));

ThemeBox.displayName = "ThemeBox";

export default ThemeBox;
