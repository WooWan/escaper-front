import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin: 0 auto;
  align-items: center;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;
export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.75rem;
`;
export const StyledForm = styled.form`
  width: 75%;
`;
export const InputBox = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  border: 2.5px solid;
  border-color: ${(props) => props.theme.gray_normal};
  margin: 0.375rem 0;
  &:focus-within {
    border-color: ${(props) => props.theme.primaryColor};
  }
`;
export const Input = styled.input`
  width: 100%;
  min-height: 1.5rem;
  border: none;
  &:focus {
    outline: none;
  }
`;
