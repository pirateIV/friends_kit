import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Textarea, Timeline } from "flowbite-react";
import { formatDistanceToNow } from "date-fns";

import {
  AvatarComponent,
  CommentBox,
  CommentsFooter,
  PostActions,
  PostContent,
  PostsFooter,
} from ".";
import useUserData from "@/hooks/useUserData";
import Button from "./Button";
import PostHeader from "./PostHeader";
import PostsFallback from "./PostsFallback";
import { postComment } from "@/services";
import { useGetAllUserPostsQuery } from "@/features/auth/reducers/posts/postsApi";

const Feed = () => {
  const user = useUserData();
  const dispatch = useDispatch();
  const [commentsState, setCommentsState] = useState({});
  const [showCommentBox, setShowCommentBox] = useState(null);
  const commentBoxRef = useRef(null);

  const handlePostComment = async (postId) => {
    if (commentsState[postId]) {
      await postComment({ comment: commentsState[postId] }, postId, dispatch);
      setCommentsState((prevState) => ({ ...prevState, [postId]: "" }));
    }
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBox((prevPostId) => (prevPostId === postId ? null : postId));
  };

  const handleCommentChange = (postId, value) => {
    setCommentsState((prevState) => ({
      ...prevState,
      [postId]: value,
    }));
  };

  const { data: posts, error, isLoading } = useGetAllUserPostsQuery(user?.id);

  const showComments = (postId) => {
    const selectedPost = posts.find((p) => p._id === postId);
    console.log(selectedPost);
  };

  const handleClickOutside = (event) => {
    if (
      commentBoxRef.current &&
      !commentBoxRef.current.contains(event.target)
    ) {
      setShowCommentBox(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-posts-list">
      {posts ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border-t dark:border-gray-800 shadow-tiny text-sm my-5 rounded-md dark:text-gray-200 dark:bg-[#1c232e]"
          >
            <PostHeader post={post} />
            {showCommentBox !== post._id ? (
              <>
                <PostContent post={post} error={error} />
                <PostActions>
                  <div></div>
                  <div>
                    <button className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-500">
                      {post.likes.length} likes
                    </button>{" "}
                    ·{" "}
                    <button
                      onClick={() => showComments(post._id)}
                      className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      {post.comments.length} comments
                    </button>
                  </div>
                </PostActions>
                <PostsFooter>
                  <Button
                    label="Like"
                    position="0px -718px"
                    handleClick={() => null}
                  />
                  <Button
                    label="Comment"
                    position="0px -529px"
                    handleClick={() => toggleCommentBox(post._id)}
                  />
                  <Button
                    label="Share"
                    position="0px -865px"
                    handleClick={() => null}
                  />
                </PostsFooter>
              </>
            ) : (
              <div className="comment-area" ref={commentBoxRef}>
                <div className="px-3.5">
                  <h3>Comments ({post.comments.length})</h3>

                  <div
                    id="commentsBox"
                    className="comments max-h-52 mb-3 overflow-y-auto divide-y divide-gray-200 dark:divide-blue-gray-800"
                  >
                    {post.comments.map((comment) => (
                      <div key={comment._id} className="p-1 text-right">
                        <div className="user">
                          <small>
                            {formatDistanceToNow(new Date(comment.createdAt))}
                          </small>
                        </div>
                        <p>{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <CommentBox>
                  <Textarea
                    rows="6"
                    value={commentsState[post._id] || ""}
                    placeholder="Write a comment..."
                    onChange={(e) =>
                      handleCommentChange(post._id, e.target.value)
                    }
                    onKeyUp={(e) =>
                      e.key === "Escape" && setShowCommentBox(null)
                    }
                    className="peer !bg-gray-100 focus:border-gray-400 dark:!bg-[#252e3b] dark:focus:!border-blue-600"
                    autoFocus
                  ></Textarea>

                  <CommentsFooter>
                    {/* <AvatarComponent /> */}
                    <Avatar rounded />
                    <div className="comment-buttons space-x-2">
                      <button
                        onClick={() => handlePostComment(post._id)}
                        className="p-2 text-xs rounded-md text-white bg-green-700 border-y outline-none border-green-500 dark:border-green-400 hover:bg-green-600 ring-offset-1 focus:ring focus:ring-green-600 disabled:cursor-not-allowed disabled:bg-green-400"
                        disabled={!commentsState[post._id]}
                      >
                        {!commentsState[post._id]
                          ? `Enter Comment... (${post.comments.length})`
                          : `Post Comment (${post.comments.length})`}
                      </button>
                      <button
                        onClick={() => setShowCommentBox(null)}
                        className="p-2 text-xs text-white rounded-md border-y border-red-500 dark:border-red-200 bg-red-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </CommentsFooter>
                </CommentBox>
              </div>
            )}
          </div>
        ))
      ) : (
        <PostsFallback />
      )}
    </div>
  );
};

export default Feed;
