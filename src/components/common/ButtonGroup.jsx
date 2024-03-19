import Button from './CustomButton';
import { nextBtnClass, prevBtnClass } from '../signup/steps';

const ButtonGroup = ({ prev, next }) => {
  return (
    <div className='flex justify-end gap-8 mt-4'>
      <Button
        content='Back'
        variant='outined'
        handleClick={prev}
        className={prevBtnClass}
      />
      <Button
        content='Next'
        variant='filled'
        handleClick={next}
        className={nextBtnClass}
      />
    </div>
  );
};

export default ButtonGroup;
