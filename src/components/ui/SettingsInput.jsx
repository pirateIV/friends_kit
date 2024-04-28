import PropTypes from 'prop-types';

const SettingsInput = ({ label, name, span, icon }) => {
  return (
    <div className={`field ${span}`}>
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
  icon: PropTypes.object,
  span: PropTypes.string,
};

export default SettingsInput;
