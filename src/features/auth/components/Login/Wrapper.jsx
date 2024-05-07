import PropTypes from 'prop-types';
import LoginIllustration from './LoginIllustration';

const Wrapper = ({ children }) => {
  return (
    <section className='p-2' style={{ height: 'calc(100vh - 100px)' }}>
      <div className='flex-center max-w-[1140px] w-full h-full mx-auto'>
        <LoginIllustration />
        <aside className='w-full px-10 sm:px-0 mx-auto sm:w-3/4 md:w-[67%] lg:w-1/2'>
          <div>
            <h2 className='text-[1.5rem] font-montserrat font-normal dark:text-[#fafafa]'>
              Welcome back
            </h2>
            <small className='dark:text-gray-200/50'>
              Enter your credentials to sign in.
            </small>
          </div>
          {children}
        </aside>
      </div>
    </section>
  );
};

Wrapper.propTypes = { children: PropTypes.node.isRequired };

export default Wrapper;
