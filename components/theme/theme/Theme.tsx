import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IThemeDetail } from "../../../interfaces/theme";
import { SubtitleFont, TitleFont } from "../../core/font/TitleFonts";
import RatingSection from "../../ratings/rating-section";
import {
  MainInfo,
  ImageContainer,
  ThemeAbout,
  Row,
  Description,
  ToggleButton,
} from "./Theme.style";

interface IProps {
  theme: IThemeDetail;
  memberRating: number | undefined;
  count: number;
  averageRating: number;
}

function ThemeInfo({ theme, memberRating, count, averageRating }: IProps) {
  const {
    themeId,
    address,
    name,
    description,
    timeLimitation,
    cost,
    imageURL,
    cafeId,
    phoneNumber,
    cafeName,
  } = theme;

  const transformedAddress = Object.values(address).join(" ");
  const [isMore, setIsMore] = useState(false);

  const handleMoreBtn = () => {
    setIsMore((prev) => !prev);
  };

  return (
    <div>
      <MainInfo>
        <ImageContainer>
          <Image src={imageURL} alt="theme" width={200} height={350} />
        </ImageContainer>
        <ThemeAbout>
          <Link href={`/cafe/${cafeId}`}>
            <a>
              <SubtitleFont>{cafeName}</SubtitleFont>
            </a>
          </Link>
          <Link href={`/theme/${themeId}`}>
            <a>
              <TitleFont>{name}</TitleFont>
            </a>
          </Link>
          <RatingSection
            count={count}
            memberRating={memberRating}
            averageRating={averageRating}
          />
          <Row>
            <SubtitleFont>위치</SubtitleFont>
            <TitleFont>{transformedAddress}</TitleFont>
          </Row>
          <Row>
            <SubtitleFont>전화 번호</SubtitleFont>
            <TitleFont>{phoneNumber}</TitleFont>
          </Row>
          <Row>
            <SubtitleFont>제한 시간</SubtitleFont>
            <TitleFont>{timeLimitation}</TitleFont>
          </Row>
          <Row>
            <SubtitleFont>가격</SubtitleFont>
            <TitleFont>{cost}</TitleFont>
          </Row>
        </ThemeAbout>
      </MainInfo>
      <section>
        <Description isActive={isMore}>{description}</Description>
        <ToggleButton onClick={handleMoreBtn}>
          {/* {isMore ? "더 보기" : "접기"} */}
        </ToggleButton>
      </section>
    </div>
  );
}

export default ThemeInfo;
