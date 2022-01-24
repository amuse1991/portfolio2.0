import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { TPost } from "./post.types";

// 반드시 store에 등록 후 사용
export const postQuery = createApi({
  reducerPath: "postsAPI",
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
    getPosts: builder.query<TPost[], void>({
      query: () => `api/posts`
    })
  })
});

export const {
  useGetPostsQuery,
  util: { getRunningOperationPromises }
} = postQuery;

export const { getPosts } = postQuery.endpoints;
