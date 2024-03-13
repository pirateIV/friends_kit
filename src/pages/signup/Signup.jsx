import CustomSignupProgress from '../../components/signup/progress/CustomSignupProgress';
import SelectAccount from '../../components/signup/steps/SelectAccount';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Signup = () => {
  useDocumentTitle('Sign Up');

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <nav className='fake-nav w-full h-[55px] bg-white'>
            <img
              src='./src/assets/images/logo/logo.svg'
              className='max-w-[48px] mx-auto'
              alt=''
            />
          </nav>
            <CustomSignupProgress />

          <SelectAccount />
        </div>
      </main>
    </>
  );
};

export default Signup;
