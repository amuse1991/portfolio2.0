import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TProject } from "./project.types";

// 반드시 store에 등록 후 사용
export const projectQuery = createApi({
  reducerPath: "projectAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["project"],
  endpoints: builder => ({
    getProjects: builder.query<TProject[], void>({
      query: () => `api/projects`
    })
  })
});

// Export hooks for usage in functional components
export const {
  useGetProjectsQuery,
  util: { getRunningOperationPromises }
} = projectQuery;

// export endpoints for use in SSR
export const { getProjects } = projectQuery.endpoints;
