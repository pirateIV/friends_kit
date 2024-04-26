import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getTheme } from '@/redux/reducers/themeReducer';
import settings1_dark from '@/assets/illustrations/settings/1-dark.svg';
import settings1 from '@/assets/illustrations/settings/1.svg';

const SettingsLayout = ({ id, title, children }) => {
  const theme = useSelector(getTheme());

  return (
    <div id={id} className='settings-section'>
      <div className='settings-panel'>
        <div className='title-wrap text-start'>
          <h2 className='font-montserrat text-[1.2rem] font-medium text-[#999]'>
            {title}
          </h2>
        </div>

        <div className='settings-form-wrapper'>
          <div className='settings-form'>{children}</div>
          <div className='illustration'>
            <img src={theme === 'light' ? settings1 : settings1_dark} alt='' />
            <p className='text-sm m-5 mx-auto'>
              If you&apos;d like to learn more about general settings, you can read about
              it in the{' '}
              <a href='#' className='underline text-blue-500 max-w-[280px]'>
                user guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SettingsLayout.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SettingsLayout;
