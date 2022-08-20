import { IMember } from "./../interfaces/member.d";
import { httpClient } from "../utils/httpClient";
import { ApiResponse } from "../interfaces/apiResponse";

export const fetchMember = async () => {
  const response = await httpClient.get<ApiResponse<IMember>>("/api/member");
  return response.data;
};
