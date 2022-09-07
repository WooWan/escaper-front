import { createGlobalStyle } from "styled-components";
import { ReactNode, useEffect } from "react";
import NavigationHeader from "../../containers/navigation-header/NavigationHeader";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../../../store/slices/Modal";
import Modal from "../../containers/modal/Modal";
import { fetchMember } from "../../../api/member";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { loginUser, selectUser } from "../../../store/slices/user";
import { setStorageItem } from "../../../utils/storage";

interface LayoutProps {
  children: ReactNode;
}

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
  const { isOpen } = useSelector(selectModal);
  useAxiosInterceptor();
  const { query } = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectUser);

  useEffect(() => {
    const { token } = query;
    console.log(token);
    const fetchUser = async () => {
      console.log("fetch user");
      const { data } = await fetchMember();

      dispatch(loginUser(data));
    };
    if (token) {
      setCookie("token", token, { path: "/" });
      fetchUser();
    }
  }, [dispatch, setCookie, query]);

  return (
    <>
      {isOpen && <Modal />}
      <GlobalStyle />
      <NavigationHeader />
      <div>{children}</div>
    </>
  );
}

export default Layout;
