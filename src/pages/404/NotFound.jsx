import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <section className='min-h-screen bg-[#f4f4f4]'>
      <div className='relative flex flex-col items-center justify-center h-full'>
        <h1 className='absolute -top-[58px] font-bold text-[28rem] opacity-[.15] z-0'>404</h1>
        <div className='max-w-[540px] z-10'>
          <img
            src='/images/404.svg'
            width='540'
            height='409'
            alt='not found page image illustration'
          />
          <div className='relative text-center' id='errorContent'>
            <div className=''>
              <h3 className='font-semibold mt-2 text-[1.5rem]'>
                We couldn't find that page
              </h3>
              <p className='text-[#a2a5b9] mb-4  text-[1.1rem]'>
                Looks like we couldn't find that page. Please try again or contact an
                administrator if the problem persists.
              </p>
            </div>
            <div>
              <button className='inline-flex items-center justify-center w-[220px] h-[50px] font-semibold text-white py-[18px] px-[22px] text-[.8rem] rounded-md bg-[#3d70b2]'>
                Take me Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
