import { useState } from "react";
import styled from "styled-components";
import Circle from "../../icons/circle";
import SidebarRow from "./sidebar-row";

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 10rem;
`;
function Sidebar() {
  const [selected, setSelected] = useState("홈");
  return (
    <SidebarList>
      <SidebarRow
        Icon={Circle}
        title="홈"
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarRow
        Icon={Circle}
        title="방탈출"
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarRow
        Icon={Circle}
        title="리뷰"
        selected={selected}
        setSelected={setSelected}
      />
    </SidebarList>
  );
}

export default Sidebar;
