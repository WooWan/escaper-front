import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URL = process.env.NEXT_PUBLIC_REDIRECT_URL;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}\
&redirect_uri=${REDIRECT_URL}&response_type=code`;

function KakaoLoginButton() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    (async () => {
      try {
        const res = await axios.get(`api/code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        router.push("/main");
      } catch (e) {
        console.error(e);
        router.push("/main");
      }
    })();
  }, []);
  return (
    <button>
      <a href={KAKAO_AUTH_URL} rel="noopener noreferrer">
        <img src="/images/kakao_login.png" />
      </a>
    </button>
  );
}

export default KakaoLoginButton;
