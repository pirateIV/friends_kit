import { Avatar } from "flowbite-react";
import { useState } from "react";

export const CommentsFooter = ({ children }) => {
  const commentFooterClass =
    "border border-t-0 border-gray-300 dark:border-gray-600 peer-focus:border-gray-400 comment-footer flex items-center justify-between h-12 bg-gray-600 dark:bg-[#1c232e] -translate-y-3 rounded-b-md dark:peer-focus:!border-blue-600";
  return <div className={commentFooterClass}>{children}</div>;
};

export const CommentBox = ({ children }) => {
  return (
    <div className="px-3.5 pb-3.5 ">
      <div className={`!border-gray-900 *:p-3 *:outline-none`}>{children}</div>
    </div>
  );
};

export const PostActions = ({ children }) => {
  return (
    <div className="post-actions flex items-center justify-between mx-3.5 px-3.5 pt-2 border-t border-gray-300 dark:border-gray-700">
      {children}
    </div>
  );
};

export const PostContent = ({ post, error, isLoading }) => {
  if (error) {
    return <div>Error loading posts...</div>;
  }
  if (isLoading) {
    return <div>Loading , please wait</div>;
  }

  const [showAll, setShowAll] = useState(false);

  const maxLength = 300;
  const shouldTruncate = post?.content?.length > maxLength;

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="px-4 mb-4">
      {shouldTruncate && !showAll ? (
        <>
          {post?.content?.slice(0, 300)}
          <button
            onClick={toggleShowAll}
            className="text-indigo-500 hover:underline"
          ></button>
        </>
      ) : (
        post?.content
      )}
    </div>
  );
};

export const PostsFooter = ({ children }) => {
  const postFooterClass =
    "post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-2 pt-2 dark:border-gray-700";
  return <div className={postFooterClass}>{children}</div>;
};

export const AvatarComponent = () => {
  return (
    <div className="avatar w-10 h-10 dark:!bg-gray-600 overflow-hidden rounded-full">
      <Avatar />
    </div>
  );
};
