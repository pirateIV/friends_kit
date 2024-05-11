import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Friendskit`;
    return () => {
      document.title = "Friendskit";
    };
  }, [title]);
};

export default useDocumentTitle;
