import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { sidebarColumn, SidebarColumnTypes } from "../Cafe";
import SidebarRow from "./sidebar-row";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: sticky;
  top: 250px;
  height: 100px;
`;

function Sidebar() {
  const [selected, setSelected] = useState("홈");
  const router = useRouter();
  const id = router.query.cafeId;
  const handleHashRouting = (hashKey: SidebarColumnTypes) => {
    router.push({
      pathname: `/cafe/${id}`,
      hash: sidebarColumn[hashKey],
    });
  };
  return (
    <Container>
      <SidebarRow
        title={sidebarColumn["홈"]}
        selected={selected}
        setSelected={setSelected}
        onClick={() => handleHashRouting(sidebarColumn["홈"])}
      />
      <SidebarRow
        title={sidebarColumn["방탈출"]}
        selected={selected}
        setSelected={setSelected}
        onClick={() => router.push("/cafe/5/#방탈출")}
      />
      <SidebarRow
        title={sidebarColumn["리뷰"]}
        selected={selected}
        setSelected={setSelected}
        onClick={() => handleHashRouting(sidebarColumn["리뷰"])}
      />
    </Container>
  );
}

export default Sidebar;
