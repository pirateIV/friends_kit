import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import sprites from '@/assets/sprites/settings_icons.svg'

const TabList = ({ tab, activeTab, handleClick }) => {
  const textState = tab.section === activeTab ? 'text-gray-900 dark:text-blue-400' : 'text-[#a5a5a5]';
  const tabState = ` ${
    tab.section === activeTab ? 'border-blue-400' : 'border-transparent'
  }`;

  return (
    <li id={tab.section} className='tab-item' data-section={`${tab.section}`}>
      <NavLink to={`?tab=${tab.section}`} className={tabState} onClick={handleClick}>
        <svg className='text-gray-400 max-h-[18px] max-w-[18px] dark:text-[#cecece]'>
          <use height='18' width='18' href={`${sprites}#${tab.section}`}></use>
        </svg>
        <span className={textState}>{tab.section}</span>
      </NavLink>
    </li>
  );
};

TabList.propTypes = {
  tab: PropTypes.object,
  activeTab: PropTypes.string,
  handleClick: PropTypes.func,
};

export default TabList;
