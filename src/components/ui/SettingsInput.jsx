import PropTypes from 'prop-types';

const SettingsInput = ({ label, name, icon }) => {
  return (
    <div className='field'>
      <label htmlFor={name}>{label}</label>
      <div className='control'>
        <input type='text' className='peer' name={name} />
        <div className='form-icon peer-focus:text-blue-600'>{icon}</div>
      </div>
    </div>
  );
};

SettingsInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default SettingsInput;
