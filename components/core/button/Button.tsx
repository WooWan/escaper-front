import styled from "styled-components";
import React, {ReactNode} from "react";

export const CustomButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.buttonText};
  border-radius: 15%;
  width: 4rem;
  height: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
`
interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  children?: string | ReactNode
}

function Button({onClick, children}: Props) {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  );
}

export default Button;