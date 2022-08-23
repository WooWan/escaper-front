import { ReactNode } from "react";
import { Button } from "./TextButton.style";

export type ButtonType = "primary" | "destructive" | "basic";
interface Props {
  onClick?: () => void;
  children?: string | ReactNode;
  buttonType?: ButtonType;
}

function TextButton({ onClick, children, buttonType }: Props) {
  return (
    <Button onClick={onClick} buttonType={buttonType}>
      {children}
    </Button>
  );
}

export default TextButton;
