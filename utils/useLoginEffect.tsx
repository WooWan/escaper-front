import {useEffect} from "react";
import {loginMember} from "../api/member";
import {loginUser, selectUser} from "../store/slices/user/user";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";

export default function useLoginEffect() {
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
}