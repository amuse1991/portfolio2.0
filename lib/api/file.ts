import { apiClient } from "./apiClient";

export const uploadFileAPI = (file: FormData) => {
  apiClient.post("api/files/upload", file);
};
