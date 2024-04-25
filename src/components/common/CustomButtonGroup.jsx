import PropTypes from 'prop-types';
import Button from './CustomButton';
import { nextBtnClass, prevBtnClass } from '../signup/steps';

const CustomButtonGroup = ({ prev, next }) => {
  return (
    <div className='flex justify-end gap-1 mt-4'>
      <Button
        content='Back'
        type='button'
        variant='outlined'
        handleClick={prev}
        className={prevBtnClass}
      />
      <Button
        content='Next'
        type='button'
        variant='filled'
        handleClick={next}
        className={nextBtnClass}
      />
    </div>
  );
};

CustomButtonGroup.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
};

export default CustomButtonGroup;
