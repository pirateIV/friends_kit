import PropTypes from 'prop-types';

const SignupWrapper = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div
        className='flex flex-col items-center justify-center'
        style={{ height: 'calc(100vh - 133px)' }}>
        <h3 className='block font-montserrat font-normal text-[1.2rem] text-center text-[#344258] dark:text-[#fafafa]'>
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
};

SignupWrapper.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SignupWrapper;
