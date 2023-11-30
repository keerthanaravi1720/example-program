


// import React from 'react';
// import { Layout, Menu, Dropdown } from 'antd';
// import { DashboardOutlined, HomeOutlined, AreaChartOutlined, CalendarOutlined, SettingOutlined } from '@ant-design/icons';
// import './A.css'; 

// const { Sider } = Layout;

// const Sidebar = () => {
//   // Sample click handlers for the menu items
//   const handleCalendarClick = () => {
//     console.log('Calendar clicked!');
//   };

//   const handleSettingsClick = () => {
//     console.log('Settings clicked!');
//   };

//   const menu = (
//     <Menu>
//       <Menu.Item key="calendar" onClick={handleCalendarClick}>
//         <CalendarOutlined />
//         Calendar
//       </Menu.Item>
//       <Menu.Item key="settings" onClick={handleSettingsClick}>
//         <SettingOutlined />
//         Settings
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className='container'>
//     <Sider className="sidebar">
//       <Menu mode="vertical">
//         <Menu.Item key="dashboard" className='d'icon={<DashboardOutlined />}>
//           Dashboard
//         </Menu.Item>
//         <Menu.Item key="home" className='d' icon={<HomeOutlined />}>
//           Home
//         </Menu.Item>
//         <Menu.SubMenu key="options" className='d' title="Options" icon={<AreaChartOutlined />}>
//           <Menu.Item key="revenue" className='d' icon={<AreaChartOutlined />}>
//             Revenue
//           </Menu.Item>
//           {/* Add more options as needed */}
//           <Menu.Divider />
//           <Menu.Item key="calendarOption" className='d' icon={<CalendarOutlined />}>
//             Calendar Option
//           </Menu.Item>
//           <Menu.Item key="settingsOption" className='d' icon={<Dropdown overlay={menu} placement="right">
//               <SettingOutlined />
//             </Dropdown>}>
//             Settings Option
//           </Menu.Item>
//         </Menu.SubMenu>
//       </Menu>
//     </Sider>

//     </div>
//   );
// };

// export default Sidebar;


// import React from 'react'
// import './A.css'

// const SideMenu = () => {
//   return (
//     <div className='spinner'>SideMenu</div>
//   )
// }

// export default SideMenu

import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 9000); // Change this value as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {/* Your content goes here */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;

