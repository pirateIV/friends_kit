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
  tagTypes: ["Posts", "Comments"],
  endpoints: (builder) => ({
    getAllUserPosts: builder.query({
      query: (userId) => `posts/${userId}`,
      providesTags: ["Posts"],
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
        prepareHeaders: (headers) => {
          headers.set("Content-Type", "multipart/form-data");
          return headers;
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}/delete`,
        method: "DELETE",
      }),
      invalidateTags: (result, error, { postId }) => [
        ({ type: "Posts" }, { type: "Comments", id: postId }),
      ],
    }),
    addPostComment: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `/comments/create/${postId}`,
        method: "POST",
        body: { comment },
      }),
      invalidateTags: (result, error, { postId }) => [
        { type: "Comments", id: postId },
      ],
    }),
    getPostComments: builder.query({
      query: (postId) => `comments/${postId}`,
      providesTags: (result, error, { postId }) => [
        { type: "Comments", id: postId },
      ],
    }),
  }),
});

export const {
  useDeletePostMutation,
  useGetAllUserPostsQuery,
  useGetPostCommentsQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useAddPostCommentMutation,
} = postsApi;
