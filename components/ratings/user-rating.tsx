import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { openModal } from "../../store/slices/Modal";
import { selectUser } from "../../store/slices/user";
import {
  GeneralRating,
  RatingInfo,
  RatingTitle,
  Score,
} from "../../styles/components";
import { rateTheme, useRateTheme } from "../../utils/rating";
import { Rating } from "../core/rating-bar/rating";

const UserRatingBox = styled(GeneralRating)``;

interface IProps {
  rating: number | undefined;
}
function UserRating({ rating }: IProps) {
  const router = useRouter();
  const [score, setScore] = useState(rating ? rating : 0);
  const themeId = router.query.id;
  const { user } = useSelector(selectUser);
  const memberId = user?.id;
  const dispatch = useDispatch();

  const { mutate: handleRate } = useRateTheme(memberId, themeId);

  const onHandleRating = (rating: number) => {
    if (memberId) {
      setScore(rating);
      handleRate({ themeId, memberId, rating });
    } else {
      dispatch(
        openModal({
          modalType: "basic",
          isOpen: true,
        })
      );
    }
  };
  const toolTipArray = [
    "별점을 남겨주세요",
    "싫어요",
    "재미 없어요",
    "별로에요",
    "많이 아쉬워요",
    "흙길",
    "풀길",
    "풀꽃길",
    "꽃길",
    "꽃밭길",
    "인생 테마에요!",
  ];

  return (
    <UserRatingBox>
      <RatingTitle>내 별점</RatingTitle>
      <RatingInfo>
        <Score>{rating}</Score>
        <Rating
          ratingValue={rating ? rating : 0}
          allowHalfIcon
          transition={true}
          tooltipArray={toolTipArray}
          showTooltip
          tooltipDefaultText={"별점을 남겨주세요"}
          onClick={onHandleRating}
        />
      </RatingInfo>
    </UserRatingBox>
  );
}

export default UserRating;
