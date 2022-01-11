import Axios from "axios";

export const browserApiClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || ""
});

export const serverApiClient = Axios.create({
  baseURL: process.env.API_URL || ""
});
