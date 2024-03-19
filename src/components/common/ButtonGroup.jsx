import Button from './CustomButton';
import { nextBtnClass, prevBtnClass } from '../signup/steps';

const ButtonGroup = ({ prev, next }) => {
  return (
    <div className='flex justify-end gap-8 mt-4'>
      <Button content='Back' className={prevBtnClass} handleClick={prev} />
      <Button content='Next' className={nextBtnClass} handleClick={next} />
    </div>
  );
};

export default ButtonGroup;
