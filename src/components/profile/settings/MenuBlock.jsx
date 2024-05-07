import PropTypes from 'prop-types'
import TabList from './TabList';

const MenuBlock = ({ tabs, activeTab, setActiveTab }) => (
  <div className='menu-block py-5'>
    <ul>
      {tabs.map((tab) => (
        <TabList
          tab={tab}
          key={tab.id}
          activeTab={activeTab}
          handleClick={() => setActiveTab(tab.section)}
        />
      ))}
    </ul>
  </div>
);

MenuBlock.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default MenuBlock