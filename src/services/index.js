import axios from "axios";
import {
  updatePost,
  updatePostComments,
} from "@/features/auth/reducers/posts/postsSlice";

const baseUrl = "http://localhost:5000/api";

const token = localStorage.getItem("token");

export const postComment = async (commentData, postId, dispatch) => {
  try {
    const res = await axios.post(
      `${baseUrl}/comments/create/${postId}`,
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
    const data = await axios.post(`${baseUrl}/posts/createPost`, content, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const comment = await res.data;
  } catch (error) {
    console.log(error);
  }
};
