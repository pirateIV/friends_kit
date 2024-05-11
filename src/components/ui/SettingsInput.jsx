import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useField } from "formik";
import {
  getUserSettings,
  selectCurrentUserSettings,
} from "@/redux/reducers/settingsSlice";

const SettingsInput = ({ label, name, span, icon, type, disabled }) => {
  const [field, meta] = useField({ name });

  return (
    <div className={span}>
      <div className={`field`}>
        <label htmlFor={name}>{label}</label>
        <div className="control">
          <input {...field} type={type} className="peer" disabled={disabled} />
          <div className="form-icon peer-focus:text-blue-600">{icon}</div>
        </div>
      </div>
      {/* {meta.error && <small className='text-red-500'>
        {meta.error}
      </small>} */}
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
