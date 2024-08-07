import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectCurrentToken } from "../login/loginSlice";
import { createPost } from "@/services";
import { baseURL } from "@/api/client";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers, { getState }) => {
      const token = selectCurrentToken(getState());
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getAllUserPosts: builder.query({
      query: (userId) => `posts/${userId}`,
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `posts/${post._id}`,
        method: "PUT",
        body: post,
      }),
    }),
    createPost: builder.mutation({
      query: (content) => ({
        url: `posts/create`,
        method: "POST",
        body: content,
      }),
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}/delete`,
        method: "DELETE",
      }),
    }),
    addPostComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `posts/${postId}/comments`,
        method: "POST",
        body: comment,
      }),
    }),
  }),
});

export const {
  useDeletePostMutation,
  useGetAllUserPostsQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useAddPostCommentMutation,
} = postsApi;
