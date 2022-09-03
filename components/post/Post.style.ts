import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 3rem;
`;
export const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
export const InfoWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1rem;
  height: 4rem;
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 2rem;
`;
export const PostWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-right: 2rem;
  padding: 2rem 1rem;
`;
export const ContentWrapper = styled.div`
  padding: 2rem 1rem;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeRating = styled.div`
  display: flex;
  align-items: center;
`;
