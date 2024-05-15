import axios from "axios";
import {
  updatePost,
  updatePostComments,
} from "@/features/auth/reducers/posts/postsSlice";

const baseUrl = "http://localhost:5000/api/comments";

const token = localStorage.getItem("token");

export const postComment = async (commentData, postId, dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/create/${postId}`, commentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const comment = await res.data;
    console.log(comment);
    dispatch(updatePostComments({ postId, comment }));
    return comment;
  } catch (error) {
    console.log(error);
  }
};
