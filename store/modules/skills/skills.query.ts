import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TSkill } from "./skills.types";

export const skillsQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: builder => ({
    getSkills: builder.query<TSkill[], void>({
      query: () => `api/skills`
    })
  })
});

// Export hooks for usage in functional components
export const {
  useGetSkillsQuery,
  util: { getRunningOperationPromises }
} = skillsQuery;

// export endpoints for use in SSR
export const { getSkills } = skillsQuery.endpoints;
