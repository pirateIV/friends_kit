import axios from "axios";
import {} from // updatePost,
// updatePostComments,
"@/features/auth/reducers/posts/postsApi";
import { baseURL } from "@/api/client";

const token = localStorage.getItem("token");

export const postComment = async (commentData, postId, dispatch) => {
  try {
    const res = await axios.post(
      `${baseURL}/comments/create/${postId}`,
      commentData,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const comment = await res.data;
    console.log(comment);
    dispatch(updatePostComments({ postId, comment }));
    return comment;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async ({ content }) => {
  try {
    const data = await axios.post(`${baseURL}/posts/createPost`, content, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const comment = await res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserMessages = async (id) => {
  try {
    const res = fetch(`${baseURL}/messages/${id}`);
    return (await res).json();
  } catch (error) {
    console.log(error);
  }
};
