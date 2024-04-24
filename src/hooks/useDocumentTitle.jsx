import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Friendskit | ${title}`;
    return () => {
      document.title = 'Friendskit';
    };
  }, [title]);
};

export default useDocumentTitle;
