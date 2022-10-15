import { httpClient } from "../service/httpClient";
import { IMember } from "../interfaces/member";
import { ApiResponse } from "../interfaces/apiResponse";

export const loginMember = async () => {
  const response = await httpClient.get<ApiResponse<IMember>>("/api/member");
  return response.data;
};
