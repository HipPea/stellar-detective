import React from 'react';
import './App.scss';
import SiteHeader from './site-header/site-header';
import LeftnavSidebar from './leftnav-sidebar/leftnav-sidebar';

// Sidebar Imports
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse } from 'react-icons/fa'

function App() {
  return (
    <div className="app">
      
      <LeftnavSidebar className="app-sidebar" />

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
