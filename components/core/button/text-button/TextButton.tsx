import { ReactNode } from "react";
import { Button } from "./TextButton.style";

interface Props {
  onClick: () => void;
  children?: string | ReactNode;
}

function TextButton({ onClick, children }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default TextButton;
