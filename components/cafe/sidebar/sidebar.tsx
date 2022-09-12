import { useRouter } from "next/router";
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
  const router = useRouter();
  const id = router.query.cafeId;

  return (
    <SidebarList>
      <SidebarRow title="홈" selected={selected} setSelected={setSelected} />
      <SidebarRow
        title="방탈출"
        selected={selected}
        setSelected={setSelected}
      />
      <SidebarRow title="리뷰" selected={selected} setSelected={setSelected} />
    </SidebarList>
  );
}

export default Sidebar;
