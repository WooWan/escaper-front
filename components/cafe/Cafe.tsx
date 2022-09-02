import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { ICafe, IThemeInfo } from "../../interfaces";
import { Rating } from "../core/rating-bar/rating";
import ThemeBox from "../core/theme-box/ThemeBox";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  padding-bottom: 1rem;
`;
const CafeName = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
`;
const Homepage = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.gray};
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.gray};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
`;

const ThemeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

interface IProps {
  cafe: ICafe;
}

function Cafe({ cafe }: IProps) {
  const { name, themes } = cafe;
  const [rate, setRate] = useState(0);

  const findAverageAge = (arr: IThemeInfo[]) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.rating / length;
    }, 0);
  };
  const averageRate = findAverageAge(themes);

  return (
    <div>
      <Header>
        <Title>
          <CafeName>{name}</CafeName>
          <Homepage>(http:/sdfdsfsd/sdfs.com)</Homepage>
        </Title>

        <Info>
          <span>예약: 010-2342-2343</span>
          <div>
            <Rating
              size={20}
              ratingValue={rate}
              initialValue={averageRate}
              readonly
              transition
            />
            <span>({averageRate})</span>
          </div>
        </Info>
      </Header>
      <Main>
        <span>{name}의 테마에 대해서 둘러보세요!</span>
        <ThemeList>
          {themes.map((theme) => (
            <Link key={theme.themeId} href={`/theme/${theme.themeId}`}>
              <div>
                <ThemeBox {...theme} />
                <h1>{theme.name}</h1>
                <h2>{name}</h2>
                <div>
                  <Rating
                    size={20}
                    ratingValue={rate}
                    initialValue={theme.rating}
                    readonly
                    transition
                  />
                  <span>(5.0)</span>
                </div>
              </div>
            </Link>
          ))}
        </ThemeList>
      </Main>
    </div>
  );
}

export default Cafe;
