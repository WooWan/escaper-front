import Image from "next/image";
import RatingSection from "../ratings/rating-section";
import styled, { css } from "styled-components";
import { useState } from "react";
import { ITheme } from "../../interfaces";
import Link from "next/link";
import { IThemeDetail } from "../../interfaces/theme";

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
const Cafe = styled.h2`
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
  theme: IThemeDetail;
  memberRating: number | undefined;
}

function ThemeInfo({ theme, memberRating }: IProps) {
  const {
    themeId,
    name,
    genre,
    description,
    timeLimitation,
    appropriatedPeople,
    themeRating,
    cost,
    imageURL,
    cafeId,
    phoneNumber,
    cafeName,
  } = theme;
  // const [theme] = useState(props.theme);
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
          <Link href={`/cafe/${cafeId}`}>
            <a>
              <Cafe>{cafeName}</Cafe>
            </a>
          </Link>
          <Theme>{name}</Theme>
          <RatingSection
            themeRating={themeRating}
            memberRating={memberRating}
          />
          <Row>
            <Item>위치</Item>
            <Info>서울 성동구 마장동</Info>
          </Row>
          <Row>
            <Item>전화 번호</Item>
            <Info>{phoneNumber}</Info>
          </Row>
          <Row>
            <Item>제한 시간:</Item>
            <Info>{timeLimitation}</Info>
          </Row>
          <Row>
            <span>가격:</span>
            <span>{cost}</span>
          </Row>
          <Row>
            <span>추천 인원:</span>
            <span>{appropriatedPeople}</span>
          </Row>
        </ThemeAbout>
      </MainInfo>
      <section>
        <Description isActive={isMore}>{description}</Description>
        <ToggleButton onClick={handleMoreBtn}>
          {isMore ? "더 보기" : "접기"}
        </ToggleButton>
      </section>
    </div>
  );
}

export default ThemeInfo;
