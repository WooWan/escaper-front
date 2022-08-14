import React, { Dispatch, SetStateAction, SVGProps, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const Row = styled.li<{ selected: boolean }>`
  position: sticky;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.375rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: ${({ selected }) => (selected ? "bolder" : "light")};
  svg {
    transition: 0.4s ease-out;
    fill: ${({ theme, selected }) =>
      selected ? theme.secondaryColor : theme.gray};
  }
  &:hover {
    svg {
      fill: ${(props) => props.theme.secondaryColor};
    }
  }
`;
interface IProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

function SidebarRow({ Icon, title, onClick, selected, setSelected }: IProps) {
  const toggleButton = () => {
    setSelected(title);
  };
  return (
    <Row
      onClick={() => {
        onClick?.();
        toggleButton();
      }}
      selected={selected === title}
    >
      <Icon />
      <p>{title}</p>
    </Row>
  );
}

export default SidebarRow;
