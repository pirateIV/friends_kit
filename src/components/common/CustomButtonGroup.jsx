import { ButtonGroup } from '@material-tailwind/react';

import Button from './CustomButton';
import { nextBtnClass, prevBtnClass } from '../signup/steps';

const CustomButtonGroup = ({ prev, next }) => {
  return (
    <ButtonGroup className='flex justify-end gap-1 mt-4 divide-none'>
      <Button
        content='Back'
        variant='outlined'
        handleClick={prev}
        className={prevBtnClass}
      />
      <Button
        content='Next'
        variant='filled'
        handleClick={next}
        className={nextBtnClass}
      />
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
