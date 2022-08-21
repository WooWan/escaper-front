import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* background-image: url(https://yologuys.com/Escape_img/theme/3489.jpg);
  background-size: cover; */
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
      delay: 0.4,
      duration: 0.2,
      type: "tween",
    },
  },
};

interface IProps {
  id: number;
  name: string;
  rate: number;
  imageURL: string;
}
function ThemeBox({ id, name, rate, imageURL }: IProps) {
  return (
    <li>
      <Link href={`/theme/${id}`}>
        <a>
          <Box
            variants={boxVariants}
            initial="normal"
            whileHover="hover"
            transition={{ type: "tween" }}
          >
            <Image
              src="/images/theme.jpeg"
              width={"250"}
              height={"310"}
              alt="theme-image"
            />
            <div>
              <header>
                <span> {name}</span>
              </header>
              <article>
                <span>{rate}</span>
              </article>
            </div>
          </Box>
        </a>
      </Link>
    </li>
  );
}

ThemeBox.displayName = "ThemeBox";

export default ThemeBox;
