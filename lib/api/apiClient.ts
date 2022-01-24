import Axios from "axios";

export const apiClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || ""
});

export const tistoryApiCient = Axios.create({
  baseURL: "https://www.tistory.com"
});
