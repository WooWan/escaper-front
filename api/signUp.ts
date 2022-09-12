import { useRouter } from "next/router";

import { useMutation } from "@tanstack/react-query";
import { ISignUpRequest } from "../interfaces/member";
import { httpClient } from "../service/httpClient";

const signUp = async (user: ISignUpRequest) => {
  const response = await httpClient.post(`/api/signUp`, user);
  return await response.data;
};

export const useSignUp = () => {
  const router = useRouter();
  return useMutation(signUp, {
    onSuccess: (data) => {
      const { redirectUrl } = data;
      router.push(redirectUrl);
    },
  });
};
