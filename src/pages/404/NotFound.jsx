import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [errorMessage] = useState(
    "Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists."
  );

  const handleRedirect = () => {
    navigate(-1);
  };
  useDocumentTitle('Not Found');

  return (
    <div className='min-h-screen'>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <div className='h-full'>
          <div className='relative flex flex-col items-center justify-center pt-10'>
            <h1 className='absolute -top-4 font-bold text-[28rem] opacity-[.15] z-0'>
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                404
              </motion.span>
            </h1>
            <div className='max-w-[540px] z-10'>
              <img
                width='540'
                height='409'
                src='/images/404.svg'
                alt='not found page image illustration'
                className='motion-safe:animate-fade-in-down'
              />
              <div className='relative text-center' id='errorContent'>
                <div>
                  <motion.h3
                    className='font-montserrat text-[#393a4f] font-semibold mt-2 text-[1.5rem]'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}>
                    We couldn't find that page
                  </motion.h3>
                  <motion.p
                    className='text-[#a2a5b9] mb-4  text-[1.1rem]'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}>
                    {errorMessage}
                  </motion.p>
                </div>
                <div>
                  <motion.button
                    onClick={() => handleRedirect()}
                    className='inline-flex items-center font-medium justify-center w-[220px] h-[50px] text-white py-[18px] px-[22px] text-[.8rem] rounded-md border-t border-[#90b3e0] shadow-sm bg-[#3d70b2] hover:bg-[#4d85ce]'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Take me Back
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default NotFoundPage;
