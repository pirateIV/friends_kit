import PropTypes from 'prop-types';

const SettingsLayout = ({ id, title, children }) => {
  return (
    <div id={id} className='settings-section'>
      <div className='settings-panel'>
        <div className='title-wrap text-start'>
          <h2 className='font-montserrat text-[1.2rem] font-medium text-[#999]'>
            {title}
          </h2>
        </div>
        {children}
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
