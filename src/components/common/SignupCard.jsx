import CustomButtonGroup from './CustomButtonGroup';
import useCustomLocation from '../../hooks/useCustomLocation';

const SignupCard = ({ children, prev, next }) => {
  const isAccountCreated = useCustomLocation('signup/created');
  return (
    <section className='py-5 max-w-[540px] w-full mx-auto'>
      <div className='bg-white p-[30px] shadow-tiny rounded-lg'>
        {children}
      </div>
      {!isAccountCreated ? <CustomButtonGroup prev={prev} next={next} /> : null}
    </section>
  );
};

export default SignupCard;    