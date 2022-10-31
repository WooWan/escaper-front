import styled from "styled-components";
import {ReactNode} from "react";
import NavigationHeader from "../../containers/navigation-header/NavigationHeader";
import ModalManager from "../../modal/modal/Modal";
import useDarkMode from "../../../utils/hooks/dark-mode/useDarkMode";
import GlobalStyle from "../../../styles/globalStyle";
import useLoginMaintain from "../../../utils/hooks/login/useLoginMaintain";

interface LayoutProps {
  children: ReactNode;
}

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

function Layout({ children }: LayoutProps) {
  useDarkMode();
  useLoginMaintain()

  return (
    <Container>
      <GlobalStyle/>
      <ModalManager />
      <NavigationHeader />
      <div>{children}</div>
    </Container>
  );
}

export default Layout;
