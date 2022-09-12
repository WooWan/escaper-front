import { ReactNode, SVGProps } from "react";
import { ButtonType } from "../text-button/TextButton";
import { IconButtonWrapper } from "./IconButton.style";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string | ReactNode;
  title?: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  buttonType?: ButtonType;
}

function IconButton({ onClick, children, title, Icon, buttonType }: Props) {
  return (
    <IconButtonWrapper buttonType={buttonType}>
      <Icon />
      <p>{title}</p>
      <p>{children}</p>
    </IconButtonWrapper>
  );
}

export default IconButton;
