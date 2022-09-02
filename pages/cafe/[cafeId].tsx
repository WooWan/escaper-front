import { GetStaticPropsContext } from "next";
import styled from "styled-components";
import Sidebar from "../../components/cafe/sidebar/sidebar";
import { ICafe } from "../../interfaces";
import { fetchCafeById, fetchCafeList } from "../../api/cafe";
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
  return (
    <Container>
      <Sidebar />
      <Cafe cafe={cafe} />
    </Container>
  );
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
  const cafeList = await fetchCafeList();

  const paths = cafeList?.map((cafe) => ({
    params: { cafeId: cafe.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export default CafePage;
