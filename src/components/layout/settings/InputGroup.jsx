import { settingsInputList } from '.';
import PropTypes from 'prop-types';
import SettingsInput from '@/components/ui/SettingsInput';
const InputGroup = ({ start, end }) => {
  return (
    <>
      {settingsInputList.slice(start, end).map((input) => (
        <SettingsInput key={input.id} {...input} />
      ))}
    </>
  );
};

InputGroup.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};

export default InputGroup;
