import { Button } from "@material-tailwind/react";
import { nextBtnClass, prevBtnClass } from "../steps";
import CustomButton from "@/components/common/CustomButton";

const FormButtons = ({ loading, handlePrevious }) => {
  return (
    <div className='flex justify-end mt-4 gap-1'>
      <CustomButton
        type='button'
        content='Back'
        variant='outlined'
        navigateTo='/signup'
        handleClick={handlePrevious}
        className={prevBtnClass}
      />
      <Button
        type='submit'
        content='Next'
        variant='outlined'
        loading={loading}
        className={nextBtnClass}>
        Next
      </Button>
    </div>
  );
};

export default FormButtons;
