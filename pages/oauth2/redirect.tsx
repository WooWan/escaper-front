import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { fetchMember } from "../../api/member";
import { loginUser } from "../../store/slices/user";
import { httpClient } from "../../utils/httpClient";
import { setStorageItem } from "../../utils/storage";

function Redirect() {
  const { query } = useRouter();
  const [cookie, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await fetchMember();
    dispatch(loginUser(data));
  };
  useEffect(() => {
    const { token } = query;

    if (token) {
      getUser();
      setCookie("token", token, { path: "/" });
      setStorageItem("token", token as string);
    }
  });

  return <div>redirect</div>;
}

export default Redirect;
