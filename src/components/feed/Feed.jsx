import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Textarea } from "flowbite-react";
import { formatDistanceToNow } from "date-fns";

import {
  useAddPostCommentMutation,
  useGetAllUserPostsQuery,
  useGetPostCommentsQuery,
} from "@/features/auth/reducers/posts/postsApi";
import useUserData from "@/hooks/useUserData";
import Button from "./Button";
import PostHeader from "./PostHeader";
import {
  CommentBox,
  CommentsFooter,
  PostActions,
  PostContent,
  PostsFooter,
} from ".";
import PostsFallback from "./PostsFallback";

const Feed = () => {
  const user = useUserData();
  const dispatch = useDispatch();
  const [expandedPosts, setExpandedPosts] = useState({});
  const [commentsState, setCommentsState] = useState({});
  const commentBoxRef = useRef(null);

  const { data: posts, error, isLoading } = useGetAllUserPostsQuery(user?.id);

  // Toggle comment box visibility
  const toggleCommentBox = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleCommentChange = (postId, value) => {
    setCommentsState((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  // Handle click outside comment box
  const handleClickOutside = (event) => {
    if (
      commentBoxRef.current &&
      !commentBoxRef.current.contains(event.target)
    ) {
      setExpandedPosts({});
    }
  };

  // Handle ESC key press to close comment box
  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setExpandedPosts({});
    }
  };

  // Add event listeners
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey); // Add event listener for ESC key
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey); // Clean up ESC key listener
    };
  }, []);

  return (
    <div className="user-posts-list">
      {posts ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border-t dark:border-gray-800 shadow text-sm my-5 rounded-xl dark:text-gray-200 dark:bg-[#1c232e]"
          >
            <PostHeader post={post} />
            <PostContent post={post} error={error} />
            <div>
              <img
                className="bg-cover h-96 w-full"
                src="https://images.pexels.com/photos/28717994/pexels-photo-28717994/free-photo-of-aerial-view-of-lone-boat-on-amasra-s-blue-waters.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
            </div>
            {/* <PostActions /> */}
            {expandedPosts[post._id] && <PostComments postId={post._id} />}
            <PostsFooter>
              <Button
                label="Comment"
                position="0px -529px"
                handleClick={() => toggleCommentBox(post._id)}
              />
            </PostsFooter>
          </div>
        ))
      ) : (
        <PostsFallback />
      )}
      {posts?.length === 0 && (
        <div className="text-center p-4 dark:text-gray-300">
          <em>{user.firstName} has no posts yet...</em>
        </div>
      )}
    </div>
  );
};

const PostComments = ({ postId }) => {
  const {
    data: comments,
    isLoading,
    refetch,
  } = useGetPostCommentsQuery(postId);
  const [addComment] = useAddPostCommentMutation();
  const [commentText, setCommentText] = useState("");
  const commentBoxRef = useRef(null); // Ref for comment box

  const handlePostComment = async () => {
    if (commentText) {
      await addComment({ postId, comment: commentText });
      setCommentText("");
      // Manually refetch comments after adding a new one
      refetch();
    }
  };

  return (
    <div ref={commentBoxRef} className="comment-area">
      {" "}
      {/* Attach ref here */}
      <div className="px-3.5">
        <h3 className="text-end text-xs dark:text-white/60">
          Comments ({comments?.length || 0})
        </h3>
        <div
          id="commentsBox"
          className="comments max-h-52 mb-3 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700"
        >
          {isLoading ? (
            <p className="opacity-50">Loading comments...</p>
          ) : (
            comments?.map((comment) => (
              <div key={comment._id} className="p-1 text-right">
                <div className="user">
                  <small className="text-gray-600 font-medium">
                    {formatDistanceToNow(new Date(comment.createdAt))}
                  </small>
                </div>
                <p className="pt-2 text-gray-900 text-sm dark:text-gray-300">
                  {comment.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      <CommentBox>
        <Textarea
          rows="6"
          value={commentText}
          placeholder="Write a comment..."
          onChange={(e) => setCommentText(e.target.value)}
          className="peer !bg-gray-100 focus:border-blue-500 dark:!bg-[#252e3b] dark:focus:!border-blue-600"
          autoFocus
        />
        <CommentsFooter>
          <Avatar size="sm" className="dark:fill-gray-600" rounded />
          <div className="comment-buttons space-x-2">
            <button
              onClick={handlePostComment}
              className="size-9 rounded-full text-xs text-white bg-[#3d70b2] border-t border-[#3d70b2] outline-none focus:ring-gray-400 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4d80c2] transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
              disabled={!commentText}
            >
              <i className="bx bxs-send text-lg"></i>
            </button>
          </div>
        </CommentsFooter>
      </CommentBox>
    </div>
  );
};

export default Feed;
