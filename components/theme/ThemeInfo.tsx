import Image from "next/image";
import RatingSection from "../ratings/rating-section";
import styled, { css } from "styled-components";
import { useState } from "react";
import { ITheme } from "../../interfaces";
import Link from "next/link";

const Description = styled.summary<{ isActive: boolean }>`
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.2rem;
  ${(props) => {
    if (props.isActive) {
      return css`
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `;
    } else {
      return css`
        display: block;
      `;
    }
  }}
}`;
const ToggleButton = styled.button`
  align-self: flex-end;
  background: transparent;
`;
const Theme = styled.h2`
  font-size: 1.5rem;
`;
const Cafe = styled.h3`
  font-size: 1.5rem;
  cursor: pointer;
`;
const Row = styled.li`
  display: flex;
`;
const Item = styled.h4`
  margin-right: 0.375rem;
  font-size: 1rem;
  color: gray;
`;
const Info = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

const MainInfo = styled.section`
  display: flex;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  flex: 0 0 250px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  padding-left: 0.25rem;
  width: 100%;
  height: 3rem;
  background-color: rgb(25, 27, 42);
  font-size: 0.875rem;
  color: rgb(226, 226, 226);
  font-weight: normal;
`;
const ThemeAbout = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  gap: 1.2rem;
  flex: 1;
`;

interface IProps {
  theme: ITheme;
}

function ThemeInfo(props: IProps) {
  const [theme] = useState(props.theme);
  const [isMore, setIsMore] = useState(false);

  const handleMoreBtn = () => {
    setIsMore((prev) => !prev);
  };
  return (
    <div>
      <MainInfo>
        <ImageContainer>
          <Image
            src="/images/escape.jpeg"
            // objectFit={"cover"}
            alt="theme"
            width={200}
            height={350}
          />
          <InfoBox>
            <Row>
              <h2>판타지</h2>
            </Row>
          </InfoBox>
        </ImageContainer>
        <ThemeAbout>
          <Link href="/">
            <Cafe>키이스케이프</Cafe>
          </Link>
          <Theme>{theme.name}</Theme>
          <RatingSection />
          <Row>
            <Item>위치</Item>
            <Info>서울 성동구 마장동</Info>
          </Row>
          <Row>
            <Item>전화 번호</Item>
            <Info>010-1234-5678</Info>
          </Row>
          <Row>
            <Item>제한 시간:</Item>
            <Info>1시간</Info>
          </Row>
        </ThemeAbout>
      </MainInfo>
      <section>
        <Description isActive={isMore}>
          Production grade React applications that scale. The world's leading
          companies use Next.js by Vercel to build static and dynamic websites
          and web applications Welcome to the Next.js documentation! If you're
          new to Next.js, we recommend starting with the learn course. The
          interactive course with quizzes will guide you through everything you
          need to know to use Next.js. If you have questions about anything
          related to Next.js, you're always welcome to ask our community on
          GitHub Discussions.
        </Description>
        <ToggleButton onClick={handleMoreBtn}>
          {isMore ? "더 보기" : "접기"}
        </ToggleButton>
      </section>
    </div>
  );
}

export default ThemeInfo;
