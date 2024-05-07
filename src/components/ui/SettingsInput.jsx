import PropTypes from 'prop-types';

const SettingsInput = ({ label, name, span, icon, value }) => {

  const handleChange=(e) => {
    console.log(e.target.value)
  }
  
  return (
    <div className={`field ${span}`}>
      <label htmlFor={name}>{label}</label>
      <div className='control'>
        <input type='text' className='peer' name={name} value={value} onChange={(e) => handleChange(e)} />
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
  value: PropTypes.string,
};

export default SettingsInput;
