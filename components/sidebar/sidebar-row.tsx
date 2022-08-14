import React, { SVGProps, useState } from "react";
import styled from "styled-components";

const Row = styled.li<{ selected: boolean }>`
  position: sticky;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  column-gap: 0.375rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  color: #abb0b5;
  &:hover {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.gray_lighter};
    font-weight: bolder;
  }
`;
interface IProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
}

function SidebarRow({ Icon, title, onClick }: IProps) {
  const [selected, setSelected] = useState(false);
  return (
    <Row onClick={() => onClick?.()} selected={selected}>
      <Icon />
      <p>{title}</p>
    </Row>
  );
}

export default SidebarRow;
