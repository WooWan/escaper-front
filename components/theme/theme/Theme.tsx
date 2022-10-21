import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IThemeDetail } from "../../../interfaces/theme";
import Font from "../../core/font/Font";
import RatingSection from "../../ratings/rating-section";
import {
  MainInfo,
  ImageContainer,
  ThemeAbout,
  Row,
  Description,
  ToggleButton,
} from "./Theme.style";
import {themedPalette} from "../../../styles/theme";

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
              <Font fontType="title">{cafeName}</Font>
            </a>
          </Link>
          <Link href={`/theme/${themeId}`}>
            <a>
              <Font fontType="subtitle">{name}</Font>
            </a>
          </Link>
          <RatingSection
            count={count}
            memberRating={memberRating}
            averageRating={averageRating}
          />
          <Row>
            <Font fontType="subtitle" color={themedPalette.gray1}>위치</Font>
            <Font fontType="subtitle">{transformedAddress}</Font>
          </Row>
          <Row>
            <Font fontType="subtitle" color={themedPalette.gray1}>전화 번호</Font>
            <Font fontType="subtitle">{phoneNumber}</Font>
          </Row>
          <Row>
            <Font fontType="subtitle" color={themedPalette.gray1}>제한 시간</Font>
            <Font fontType="subtitle">{timeLimitation}</Font>
          </Row>
          <Row>
            <Font fontType="subtitle" color={themedPalette.gray1}>가격</Font>
            <Font fontType="subtitle">{cost}</Font>
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
