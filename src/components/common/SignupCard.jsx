const SignupCard = ({ children }) => {
  return (
    <section className='py-5 max-w-[540px] w-full mx-auto'>
      <div className='bg-white border border-slate-200 rounded-lg p-[30px]'>
        {children}
      </div>
      <ButtonGroup prev={prev} next={next} />
    </section>
  );
};

export default SignupCard;
