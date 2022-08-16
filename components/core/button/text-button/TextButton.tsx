import { ReactNode } from "react";
import { ButtonWrapper } from "./TextButton.style";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string | ReactNode;
}

function Button({ onClick, children }: Props) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

export default Button;
