import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Textarea, Timeline } from "flowbite-react";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

import PostHeader from "./PostHeader";
import Button from "./Button";
import PostContent from "./PostContent";
import AvatarComponent from "./AvatarComponent";

const Feed = () => {
  const { user } = useSelector(selectCurrentUser);
  const posts = useSelector((state) => state.posts.posts);
  const [comment, setComment] = useState("");
  const [showCommentBoxes, setShowCommentBoxes] = useState([]);

  const toggleCommentBox = (postId) => {
    setShowCommentBoxes((prevCommentBoxes) => {
      const updatedCommentBoxes = [...prevCommentBoxes];
      updatedCommentBoxes[postId] = !updatedCommentBoxes[postId];
      return updatedCommentBoxes;
    });
  };

  const postComment = (userId, postId) => {
    setComment("");
    console.log({ userId, postId, comment });
  };

  const postFooterClass =
    "post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-2 pt-2 dark:border-gray-700";
  const commentFooterClass =
    "border border-t-0 border-gray-300 dark:border-gray-600 peer-focus:border-gray-400 comment-footer flex items-center justify-between h-14 bg-gray-300 dark:bg-[#1c232e] -translate-y-3 rounded-b-md dark:peer-focus:!border-blue-600";

  return (
    <div className="user-posts-list">
      <Timeline>
        {posts &&
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
                  <div className="post-actions mx-3.5 px-3.5 pt-2 border-t border-gray-300">
                    <small className="text-gray-600">
                      {post.comments.length} comments
                    </small>
                  </div>
                  <div className={postFooterClass}>
                    <Button label="Like" position="0px -718px" />
                    <Button
                      label="Comment"
                      position="0px -529px"
                      handleClick={() => toggleCommentBox(post._id)}
                    />
                    <Button label="Share" position="0px -865px" />
                  </div>
                </>
              ) : (
                showCommentBoxes[post._id] && (
                  <div className="px-3.5 pb-3.5 ">
                    <div className={`!border-gray-900 *:p-3 *:outline-none`}>
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

                      <div className={commentFooterClass}>
                        <AvatarComponent />
                        <div className="comment-buttons space-x-2">
                          <button
                            onClick={() => postComment(user.id, post._id)}
                            className="p-2.5 rounded-md text-white bg-green-700 border-t outline-none border-green-500 dark:border-green-400 hover:bg-green-600 ring-offset-1 focus:ring focus:ring-green-600 disabled:cursor-not-allowed disabled:bg-green-400"
                            disabled={!comment}
                          >
                            {!comment ? "Enter Comment..." : "Post Comment"}
                          </button>
                          <button
                            onClick={() => setShowCommentBoxes({})}
                            className="p-2.5 text-white rounded-md border-t border-red-500 dark:border-red-200 bg-red-500"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  );
};

export default Feed;
