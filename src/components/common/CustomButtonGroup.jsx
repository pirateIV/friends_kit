import { ButtonGroup } from '@material-tailwind/react';

import Button from './CustomButton';
import { nextBtnClass, prevBtnClass } from '../signup/steps';
import { useFormikContext } from 'formik';

const CustomButtonGroup = ({ prev, next }) => {
  const formik = useFormikContext();
  const handleNext = () => {
    formik.submitForm();
  };

  // const handleOnClick = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 600));
  //   navigate('/signup');
  //   handleClick();
  // };
  return (
    <ButtonGroup className='flex justify-end gap-1 mt-4 divide-none'>
      <Button
        content='Back'
        type='button'
        variant='outlined'
        handleClick={prev}
        className={prevBtnClass}
      />
      <Button
        content='Next'
        type='submit'
        variant='filled'
        // handleClick={handleNext}
        className={nextBtnClass}
      />
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
