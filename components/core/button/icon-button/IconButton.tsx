import { ReactNode, SVGProps } from "react";
import { IconButtonWrapper } from "./IconButton.style";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string | ReactNode;
  title?: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

function IconButton({ onClick, children, title, Icon }: Props) {
  return (
    <IconButtonWrapper>
      <Icon />
      <p>{title}</p>
      <p>{children}</p>
    </IconButtonWrapper>
  );
}

export default IconButton;
