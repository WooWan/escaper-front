import { useRouter } from "next/router";
import { httpClient } from "./../utils/httpClient";
import { useMutation } from "@tanstack/react-query";
import { ISignUpRequest } from "../interfaces/member";

const signUp = async (user: ISignUpRequest) => {
  const response = await httpClient.post(`/api/signUp`, user);
  return response.data;
};

export const useSignUp = () => {
  const router = useRouter();
  return useMutation(signUp, {
    onSuccess: (data) => {
      const { redirectUrl } = data;
      router.push("/");
      //   router.push(redirectUrl);
    },
  });
};