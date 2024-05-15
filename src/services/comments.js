import axios from "axios";
import {
  updatePost,
  updatePostComments,
} from "@/features/auth/reducers/posts/postsSlice";

const baseUrl = "http://localhost:5000/api/comments";

const token = localStorage.getItem("token");

export const postComment = async (comment, postId, dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/create/${postId}`, comment, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.data;
    console.log(data);
    dispatch(updatePostComments(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};
