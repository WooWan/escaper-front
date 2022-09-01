import styled from "styled-components";

export const TitleFont = styled.h1<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 650;
`;

export const SubtitleFont = styled.h2<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 350;
`;

export const ContentFont = styled.h4<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: 250;
`;
