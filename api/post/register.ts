import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IOption, ISearch } from "../../interfaces/post";
import { httpClient } from "../../utils/httpClient";

const makeURL = (resource: string, param: string, condition?: string) => {
  return condition === ""
    ? `/api/${resource}`
    : `/api/${resource}/?${param}=${condition}`;
};

export const addPost = async ({ ...post }) => {
  const id = await httpClient.post("/api/post", post);
  return id;
};

export const fetchCityList = async () => {
  const response = await httpClient.get("/api/cities");
  return await response.data;
};

export const fetchAreaList = async (city?: string) => {
  const url = makeURL("areas", "city", city);
  const response = await httpClient.get(url);
  return response.data;
};

export const fetchCafeList = async (area?: string) => {
  const url = makeURL("cafes", "area", area);
  const response = await httpClient.get(url);
  return response.data;
};

export const fetchThemeList = async (cafe?: string) => {
  const url = makeURL("themes", "cafe", cafe);
  const response = await httpClient.get(url);
  return response.data;
};

export function useAddPost() {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: async ({ data }) => {
      await queryClient.invalidateQueries(["posts"]);
    },
    onError: (error) => {
      // console.error(error);
    },
  });
}

function convertFromStringToOption(data: string[]): IOption[] {
  return data.map((item) => ({
    label: item.toString(),
    value: item.toString(),
  }));
}
function convertFromObjectToOption(data: ISearch[]): IOption[] {
  return data.map((item) => ({
    label: item.name,
    value: item.name,
  }));
}

export function useSearchCity() {
  return useQuery<string[], unknown, IOption[]>(
    ["cityList"],
    () => fetchCityList(),
    {
      select: (data) => convertFromStringToOption(data),
    }
  );
}

export function useSearchArea(city?: string) {
  return useQuery<string[], unknown, IOption[]>(
    ["areaList", city],
    () => fetchAreaList(city),
    {
      select: (data) => convertFromStringToOption(data),
    }
  );
}

export function useSearchCafe(area?: string) {
  return useQuery<ISearch[], unknown, IOption[]>(
    ["cafeList", area],
    () => fetchCafeList(area),
    {
      select: (data) => convertFromObjectToOption(data),
    }
  );
}

export function useSearchTheme(cafe?: string) {
  return useQuery<ISearch[], unknown, IOption[]>(
    ["themeList", cafe],
    () => fetchThemeList(cafe),
    {
      select: (data) => convertFromObjectToOption(data),
    }
  );
}
