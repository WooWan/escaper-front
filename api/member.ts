import { httpClient } from "../service/httpClient";
import { IMember } from "../interfaces/member";
import { ApiResponse } from "../interfaces/apiResponse";

export const loginMember = async (): Promise<ApiResponse<IMember>> => {
  const response = await httpClient.get("/api/member");
  return response.data;
};
