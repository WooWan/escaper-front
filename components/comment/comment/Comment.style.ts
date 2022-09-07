import styled from "styled-components";

export const CommentBox = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme.gray};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  row-gap: 0.375rem;
  margin-bottom: 1rem;
`;
export const CommentDate = styled.span`
  color: ${(props) => props.theme.gray_normal};
`;

export const ButtonContainer = styled.section`
  display: flex;
  column-gap: 0.75rem;
`;

export const Button = styled.button`
  cursor: pointer;
`;
