import styled from "styled-components";

export const Navigator = styled.div`
  display: flex;
  gap: 20px;
`;
export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;

export const LoginBox = styled.li`
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

export const KakaoIconWrapper = styled.div`
  background-color: ${(props) => props.theme.kakao};
  padding: 0.2rem 0.1rem;
`;
