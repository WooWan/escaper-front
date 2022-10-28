import {useEffect} from "react";
import {loginMember} from "../../../api/member";
import {loginUser, selectUser} from "../../../store/slices/user/user";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";

export default function useLoginUser() {
  const router = useRouter();
  const { query } = router;
  const [_, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectUser);
  const { token } = query;

  useEffect(() => {
    setCookie("token", token, {path: "/", httpOnly: true});

    if (token && !isLogin) {
      const {} = loginMember()
        .then(data => data.result)
        .then(result => dispatch(loginUser(result)));
    }

    router.push("/")
  }, [router, setCookie, isLogin, token, dispatch]);
}