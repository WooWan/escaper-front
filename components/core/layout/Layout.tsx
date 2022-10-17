import styled from "styled-components";
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
      <NavigationHeader />
      <div>{children}</div>
    </Container>
  );
}

export default Layout;
