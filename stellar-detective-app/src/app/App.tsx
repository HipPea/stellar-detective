import React from 'react';
import './App.scss';
import SiteHeader from './site-header/site-header';

// Sidebar Imports
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse } from 'react-icons/fa'

function App() {
  return (
    <div className="app">
      
      <ProSidebar className="app-sidebar">
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
          <SubMenu title="Insights" icon={<FaWarehouse />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>

      <div className="app-content">

        <SiteHeader className="app-header" />

        <body className="app-body">
        </body>

        <footer className="app-footer">
  test
        </footer>
      </div>

    </div>
  );
}

export default App;
