import styled, { createGlobalStyle } from "styled-components";
import { ReactNode, useEffect } from "react";
import NavigationHeader from "../../containers/navigation-header/NavigationHeader";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
import ModalManager from "../../modal/modal/Modal";
import { loginMember } from "../../../api/member";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { loginUser, selectUser } from "../../../store/slices/user/user";

interface LayoutProps {
  children: ReactNode;
}

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif;
  }
  ul, li {
    list-style: none;
  }
  button {
    background-color: transparent;
  }


  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

function Layout({ children }: LayoutProps) {
  useAxiosInterceptor();
  const router = useRouter();
  const { query } = router;
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectUser);

  useEffect(() => {
    const { token } = query;
    if (token) {
      setCookies("token", token, { path: "/", httpOnly: true });
    }

    const jwt = token || cookies["token"];

    if (isLogin || !jwt) return;
    setCookies("token", jwt, { path: "/" });
    const getUser = async () => {
      try {
        const { data } = await loginMember();
        dispatch(loginUser(data));
      } catch (err) {
        removeCookie("token");
      } finally {
        router.push("/");
      }
    };
    getUser();
  }, [
    isLogin,
    dispatch,
    setCookies,
    query,
    router,
    cookies,
    cookies.token,
    removeCookie,
  ]);

  return (
    <Container>
      <ModalManager />
      <GlobalStyle />
      <NavigationHeader />
      <div>{children}</div>
    </Container>
  );
}

export default Layout;
