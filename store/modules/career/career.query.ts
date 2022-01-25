import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TCareer } from "./career.types";

// 반드시 store에 등록 후 사용
export const careerQuery = createApi({
  reducerPath: "careerAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["career"],
  endpoints: builder => ({
    getCareers: builder.query<TCareer[], void>({
      query: () => `api/careers`
    })
  })
});

// Export hooks for usage in functional components
export const {
  useGetCareersQuery,
  util: { getRunningOperationPromises }
} = careerQuery;

// export endpoints for use in SSR
export const { getCareers } = careerQuery.endpoints;
