import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Sidebar from "../../components/cafe/sidebar/sidebar";
import { ICafe } from "../../types";
import { httpClient } from "../../utils/httpClient";
import Cafe from "../../components/cafe/Cafe";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  max-width: 1060px;
  margin: 0 auto;
`;
interface IProps {
  cafe: ICafe;
}

function CafePage({ cafe }: IProps) {
  const router = useRouter();
  const cafeId = router.query.cafeId;

  return (
    <Container>
      <Sidebar />
      <Cafe cafe={cafe} />
    </Container>
  );
}

async function fetchCafeById(id: string | string[] | undefined) {
  const response = await httpClient.get(`/api/cafe/${id}`);
  return await response.data;
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.cafeId;
  const cafe = await fetchCafeById(id);

  return {
    props: { cafe },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const response = await httpClient.get<ICafe[]>("/api/cafes");
  const data = await response.data;
  // console.log(data);
  const paths = data?.map((cafe) => ({
    params: { cafeId: cafe.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default CafePage;
