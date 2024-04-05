import { useEffect } from 'react';

const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Friendskit | ${title}`;
    return () => {
      document.title = 'Friendskit';
    };
  }, [title]);
};

export default setDocumentTitle;
