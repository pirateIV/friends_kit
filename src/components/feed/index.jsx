import { Avatar } from "flowbite-react";

export const CommentsFooter = ({ children }) => {
  const commentFooterClass =
    "border border-t-0 border-gray-300 dark:border-gray-600 peer-focus:border-gray-400 comment-footer flex items-center justify-between h-12 bg-gray-300 dark:bg-[#1c232e] -translate-y-3 rounded-b-md dark:peer-focus:!border-blue-600";
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

export const PostContent = ({ post }) => {
  return <div className="px-4 mb-4">{post.content}</div>;
};

export const PostsFooter = ({ children }) => {
  const postFooterClass =
    "post-footer p-3 mx-4 border-t flex items-center justify-center *:flex-1 *:flex-center *:py-1 border-gray-300 mt-2 pt-2 dark:border-gray-700";
  return <div className={postFooterClass}>{children}</div>;
};

export const AvatarComponent = () => {
  return (
    <div className="avatar w-10 h-10 overflow-hidden rounded-full">
      <Avatar />
    </div>
  );
};
