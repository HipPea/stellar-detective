import React from 'react';
import './site-header.scss';
import Button from '@material-ui/core/Button';

// Sidebar Imports
import { FaBars } from 'react-icons/fa'


type SiteHeaderProperties = {
  className: string
}
function SiteHeader({className}: SiteHeaderProperties) {
  console.log(className);
  
  return (
    <header className={className}>
        <div className="header">
          <div className="header-content">
            <Button className="sidebar-expander"><FaBars /></Button >
          </div>
        </div>
    </header>
  );
}

export default SiteHeader;
