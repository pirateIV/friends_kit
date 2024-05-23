import React, { useState, useEffect, useRef } from "react";
import useCustomLocation from "@/hooks/useCustomLocation";
import { AvatarComponent } from ".";
import { formatPostDate } from "@/helpers/formatDate";
import useUserData from "@/hooks/useUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faTimes } from "@fortawesome/free-solid-svg-icons";

const PostHeader = ({ post }) => {
  const isProfile = useCustomLocation("app/@me");
  const user = useUserData();

  // State for dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Create a ref for the dropdown
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  const deletePost = (id) => {
    if (confirm("Do you want to delete this post")) {
      console.log("post deleted", id);
    }
  };

  return (
    <div className="post-header p-4 mb-1">
      <header className="relative mini-post-header flex flex-col">
        <div className="absolute flex justify-end gap-5 mb-2 right-0">
          <button
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          {isDropdownVisible && (
            <div
              ref={dropdownRef}
              id="dropdownDotsHorizontal"
              className="z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600 absolute right-0 top-12"
            >
              <ul
                className="py-2 text-xs text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                {isProfile && (
                  <li>
                    <button
                      href="#"
                      onClick={() => deletePost(post._id)}
                      className="!block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete post
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
          <button className="text-gray-700 text-lg hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <AvatarComponent />
          <div>
            <h5 className="header-title font-medium dark:font-normal">
              {isProfile ? "You" : `${user?.firstName} ${user?.lastName}`}
            </h5>
            <p className="text-gray-500">{formatPostDate(post.createdAt)}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PostHeader;
