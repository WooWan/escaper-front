import styled, { css } from "styled-components";

export const Description = styled.summary<{ isActive: boolean }>`
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
`;
export const ToggleButton = styled.button`
  align-self: flex-end;
  background: transparent;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
export const Item = styled.h4`
  margin-right: 0.375rem;
  font-size: 1rem;
  color: gray;
`;

export const MainInfo = styled.section`
  display: flex;
  padding-bottom: 2rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  flex: 0 0 250px;
`;
export const InfoBox = styled.div`
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
export const ThemeAbout = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  gap: 1.2rem;
  flex: 1;
`;
