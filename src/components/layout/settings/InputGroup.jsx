import { settingsInputList } from '.';
import PropTypes from 'prop-types';
import SettingsInput from '@/components/ui/SettingsInput';
import { selectCurrentUser } from '@/auth/reducers/login/loginSlice';
import { useSelector } from 'react-redux';
const InputGroup = ({ start, end }) => {
  const user = useSelector(selectCurrentUser);
  
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
