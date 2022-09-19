import React, { useId, useState } from "react";
import Select from "react-select";
import { Control, useController } from "react-hook-form";
import styled from "styled-components";
import { IForm } from "../../../../interfaces/post";
import {
  useSearchArea,
  useSearchCafe,
  useSearchCity,
  useSearchTheme,
} from "../../../../api/post/register";
import { IThemeInfo } from "../../../../interfaces";

const SelectorContainer = styled.div`
  display: flex;
  gap: 12px;
`;
interface ISelectInput {
  control: Control<IForm>;
  theme?: IThemeInfo;
}

function SelectInput({ control, theme }: ISelectInput) {
  const address = theme?.cafeResponse?.address;
  const [city, setCity] = useState<string | undefined>("");
  const [area, setArea] = useState<string | undefined>("");
  const [cafe, setCafe] = useState<string | undefined>("");
  const cityList = useSearchCity();
  const areaList = useSearchArea(city);
  const cafeList = useSearchCafe(area);
  const themeList = useSearchTheme(cafe);

  const {
    field: { ref, ...inputProps },
  } = useController({
    control,
    name: "city",
  });
  const { field: areaController } = useController({ control, name: "area" });

  const { field: cafeController } = useController({ control, name: "cafe" });
  const { field: themeController } = useController({
    control,
    name: "themeName",
  });
  const cityt = { label: address?.city, value: address?.city };
  return (
    <SelectorContainer>
      <Select
        instanceId={useId()}
        defaultInputValue={address?.city}
        ref={areaController.ref}
        onChange={(options) => {
          inputProps.onChange(options?.value);
          setCity(options?.value);
        }}
        placeholder="지역"
        options={cityList.data}
      />
      <Select
        instanceId={useId()}
        defaultInputValue={address?.area}
        placeholder="상세지역"
        onChange={(options) => {
          areaController.onChange(options?.value);
          setArea(options?.value);
        }}
        options={areaList.data}
      />
      <Select
        instanceId={useId()}
        defaultInputValue={theme?.cafeResponse?.name}
        placeholder="카페"
        onChange={(options) => {
          cafeController.onChange(options?.value);
          setCafe(options?.value);
        }}
        options={cafeList.data}
      />
      <Select
        instanceId={useId()}
        defaultInputValue={theme?.name}
        placeholder="테마"
        onChange={(options) => {
          themeController.onChange(options?.value);
        }}
        options={themeList.data}
        styles={{
          menu: (provided) => ({ ...provided, zIndex: 9999 }),
        }}
      />
    </SelectorContainer>
  );
}

export default SelectInput;
