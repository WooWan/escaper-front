import styled from "styled-components";
import Circle from "../icons/circle";
import SidebarRow from "./sidebar-row";

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 10rem;
`;
function Sidebar() {
  return (
    <SidebarList>
      <SidebarRow Icon={Circle} title="홈" />
      <SidebarRow Icon={Circle} title="방탈출" />
      <SidebarRow Icon={Circle} title="리뷰" />
    </SidebarList>
  );
}

export default Sidebar;
