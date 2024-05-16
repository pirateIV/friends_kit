import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Textarea, Timeline } from "flowbite-react";

import Button from "./Button";
import PostHeader from "./PostHeader";
import { postComment } from "@/services/comments";
import {
  AvatarComponent,
  CommentBox,
  CommentsFooter,
  PostActions,
  PostContent,
  PostsFooter,
} from ".";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [comment, setComment] = useState("");
  const [showCommentBoxes, setShowCommentBoxes] = useState({});

  const handlePostComment = async (postId) => {
    await postComment({ comment }, postId, dispatch);
    setComment("");
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBoxes((prevState) => {
      const newState = { ...prevState };
      newState[postId] = !newState[postId];
      return newState;
    });
  };

  const showComments = async (postId) => {
    console.log(postId);
    const selectedPosts = posts.find((p) => (p._id === postId ? p : null));
    console.log(selectedPosts);
  };

  return (
    <div className="user-posts-list">
      <Timeline>
        {posts ? (
          posts.map((post) => (
            <Timeline.Item
              key={post._id}
              className="bg-white border-t dark:border-gray-800 shadow-tiny text-sm my-5 rounded-md dark:text-gray-200 dark:bg-[#1c232e]"
            >
              <Timeline.Point />
              <PostHeader post={post} />
              {!showCommentBoxes[post._id] ? (
                <>
                  <PostContent post={post} />
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
                showCommentBoxes[post._id] && (
                  <CommentBox>
                    <Textarea
                      rows="6"
                      value={comment}
                      placeholder="Write a comment..."
                      onChange={(e) => setComment(e.target.value)}
                      onKeyUp={(e) =>
                        e.key === "Escape" && setShowCommentBoxes({})
                      }
                      className="peer !bg-gray-100 focus:border-gray-400 dark:!bg-[#252e3b] dark:focus:!border-blue-600"
                      autoFocus
                    ></Textarea>

                    <CommentsFooter>
                      <AvatarComponent />
                      <div className="comment-buttons space-x-2">
                        <button
                          onClick={() => handlePostComment(post._id)}
                          className="p-2 text-xs rounded-md text-white bg-green-700 border-y outline-none border-green-500 dark:border-green-400 hover:bg-green-600 ring-offset-1 focus:ring focus:ring-green-600 disabled:cursor-not-allowed disabled:bg-green-400"
                          disabled={!comment}
                        >
                          {!comment
                            ? `Enter Comment... (${post.comments.length})`
                            : `Post Comment (${post.comments.length})`}
                        </button>
                        <button
                          onClick={() => setShowCommentBoxes({})}
                          className="p-2 text-xs text-white rounded-md border-y border-red-500 dark:border-red-200 bg-red-500"
                        >
                          Cancel
                        </button>
                      </div>
                    </CommentsFooter>
                  </CommentBox>
                )
              )}
            </Timeline.Item>
          ))
        ) : (
          <div className="bg-white border-t dark:border-gray-800 shadow-tiny text-sm my-5 rounded-md dark:text-gray-200 dark:bg-[#1c232e]">
            <h3 className="text-red-500">Error Loading Posts</h3>
          </div>
        )}
      </Timeline>
    </div>
  );
};

export default Feed;
