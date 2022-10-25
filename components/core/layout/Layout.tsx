import styled from "styled-components";
import {ReactNode} from "react";
import NavigationHeader from "../../containers/navigation-header/NavigationHeader";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import ModalManager from "../../modal/modal/Modal";
import useLoginEffect from "../../../utils/useLoginEffect";
import useDarkMode from "../../../utils/hooks/dark-mode/useDarkMode";
import GlobalStyle from "../../../styles/globalStyle";

interface LayoutProps {
  children: ReactNode;
}

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

function Layout({ children }: LayoutProps) {
  useAxiosInterceptor();
  useLoginEffect();
  useDarkMode();

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
