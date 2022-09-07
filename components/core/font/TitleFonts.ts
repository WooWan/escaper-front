import styled from "styled-components";
import Theme from "../../../pages/theme";

export const TitleFont = styled.h1<{ fontSize: string; color?: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  color: ${({ theme, color }) =>
    color === "gray" ? theme.gray_normal : theme.textColor};
`;

export const SubtitleFont = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 350;
`;

export const ContentFont = styled.h4<{ fontSize: string; color?: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 250;
  color: ${({ theme, color }) =>
    color === "gray" ? theme.gray_normal : theme.textColor};
`;
