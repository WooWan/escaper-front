import { httpClient } from "./../service/httpClient";
import { IMember } from "../interfaces/member";
import { ApiResponse } from "../interfaces/apiResponse";

export const fetchMember = async () => {
  const response = await httpClient.get<ApiResponse<IMember>>("/api/member");
  return response.data;
};
