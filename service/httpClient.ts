import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});
