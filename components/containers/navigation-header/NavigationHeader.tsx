import { Header, LoginBox, Navigator } from "./NavigationHeader.style";
import Link from "next/link";
import { useAxiosInterceptor } from "../../../utils/hooks/useAxiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/slices/user";
import { openModal } from "../../../store/slices/Modal";
import { useRouter } from "next/router";
import { TitleFont } from "../../core/font/TitleFonts";

function NavigationHeader() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLogin } = useSelector(selectUser);
  useAxiosInterceptor();

  const handleModalOpen = () => {
    dispatch(
      openModal({
        modalType: "LoginModal",
        isOpen: true,
      })
    );
  };

  const handleRegisterPost = (href: string) => {
    if (!isLogin) {
      dispatch(
        openModal({
          modalType: "basic",
          isOpen: true,
        })
      );
    } else {
      router.push(href);
    }
  };

  return (
    <Header>
      <div>
        <Link href="/">
          <a>
            <TitleFont fontSize="2rem">Escapers</TitleFont>
          </a>
        </Link>
      </div>
      <Navigator>
        <LoginBox>
          <button onClick={() => handleRegisterPost("/post/register")}>
            방탈출 모집
          </button>
        </LoginBox>
        <LoginBox>
          <Link href="/theme">
            <a>테마</a>
          </Link>
        </LoginBox>
        {isLogin ? (
          <LoginBox>로그아웃</LoginBox>
        ) : (
          <LoginBox onClick={handleModalOpen}>로그인/회원가입</LoginBox>
        )}
      </Navigator>
    </Header>
  );
}

export default NavigationHeader;
