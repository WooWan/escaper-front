import Link from 'next/link';
import Image from 'next/image'
import {useRouter} from "next/router";
import styled from "styled-components";

const Navigator = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
  a {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }
`
const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function NavBar() {
  const router = useRouter();
  const navigateHome = () => {
    router.push("/");
  };
  return (
    <Header>
      <Image
        onClick={navigateHome}
        src="/vercel.svg" alt=""
        width={150}
        height={150}
      />
      <Navigator>
        <Link href="/post/register">
          <a>방탈출 모집</a>
        </Link>
        <Link href="/cafe">
          <a>카페</a>
        </Link>
        <Link href="/theme">
          <a>테마</a>
        </Link>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </Navigator>
    </Header>
  );
}

export default NavBar;