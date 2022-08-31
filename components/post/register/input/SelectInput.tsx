import React, { useId, useState } from "react";
import Select from "react-select";
import { Control, Controller, useController } from "react-hook-form";
import styled from "styled-components";
import { IForm } from "../../../../interfaces/post";
import {
  useSearchArea,
  useSearchCafe,
  useSearchCity,
  useSearchTheme,
} from "../../../../api/post/register";

const SelectorContainer = styled.div`
  display: flex;
  gap: 12px;
`;
interface ISelectInput {
  control: Control<IForm>;
}

function SelectInput({ control }: ISelectInput) {
  const [city, setCity] = useState<string | undefined>("");
  const [area, setArea] = useState<string | undefined>("");
  const [cafe, setCafe] = useState<string | undefined>("");
  const cityList = useSearchCity();
  const areaList = useSearchArea(city);
  const cafeList = useSearchCafe(area);
  const themeList = useSearchTheme(cafe);

  const { field: cityController } = useController({ control, name: "city" });
  const { field: areaController } = useController({ control, name: "area" });
  const { field: cafeController } = useController({ control, name: "cafe" });
  const { field: themeController } = useController({ control, name: "theme" });

  return (
    <SelectorContainer>
      <Select
        instanceId={useId()}
        onChange={(options) => {
          cityController.onChange(options?.value);
          setCity(options?.value);
        }}
        placeholder="지역"
        options={cityList.data}
      />
      <Select
        instanceId={useId()}
        placeholder="상세지역"
        onChange={(options) => {
          areaController.onChange(options?.value);
          setArea(options?.value);
        }}
        options={areaList.data}
      />
      <Select
        instanceId={useId()}
        placeholder="카페"
        onChange={(options) => {
          cafeController.onChange(options?.value);
          setCafe(options?.value);
        }}
        options={cafeList.data}
      />
      <Select
        instanceId={useId()}
        placeholder="테마"
        onChange={(options) => themeController.onChange(options?.value)}
        options={themeList.data}
      />
    </SelectorContainer>
  );
}

export default SelectInput;
