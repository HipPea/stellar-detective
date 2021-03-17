import React from 'react';
import './App.scss';

// Sidebar Imports
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      
      <ProSidebar className="App-sidebar">
        <Menu iconShape="square">
          <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
          <SubMenu title="Insights" icon={<FaWarehouse />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>

      <div className="App-content">

        <header className="App-header">

        </header>

        <body className="App-body">
        </body>

        <footer className="App-footer">
  test
        </footer>
      </div>

    </div>
  );
}

export default App;
