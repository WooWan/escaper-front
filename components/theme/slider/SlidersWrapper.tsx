import Slider from "./slider/Slider";
import styled from "styled-components";
import { IThemesType } from "../../../interfaces";

const SlidersWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;

interface IProps {
  data?: IThemesType[];
}
function Sliders({ data }: IProps) {
  return (
    <SlidersWrapper>
      <Slider genre="popular" />
      {data?.map((theme) => (
        <Slider key={theme.id} id={theme.id} genre={theme.genre} />
      ))}
    </SlidersWrapper>
  );
}

export default Sliders;
