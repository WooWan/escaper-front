import { ReactNode } from "react";
import { Button } from "./TextButton.style";

export type ButtonType = "primary" | "destructive" | "basic";
interface Props {
  onClick?: () => void;
  children?: string | ReactNode;
  buttonType?: ButtonType;
  size?: string;
}

function TextButton({ onClick, children, buttonType, size }: Props) {
  return (
    <Button onClick={onClick} buttonType={buttonType} size={size}>
      {children}
    </Button>
  );
}

export default TextButton;
