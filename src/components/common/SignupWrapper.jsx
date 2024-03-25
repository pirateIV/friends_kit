const SignupWrapper = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div
        className='flex flex-col items-center justify-center'
        style={{ height: 'calc(100vh - 133px)' }}>
        <h3 className='block font-montserrat font-semibold text-lg text-center text-[#344258] dark:text-[#fafafa]'>
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
};

export default SignupWrapper;
