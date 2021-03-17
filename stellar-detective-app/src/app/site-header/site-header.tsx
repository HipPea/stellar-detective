import React from 'react';
import './site-header.scss';
import Button from '@material-ui/core/Button';

// Sidebar Imports
import { FaBars } from 'react-icons/fa'


type SiteHeaderProperties = {
  className: string
}
function SiteHeader({className}: SiteHeaderProperties) {
  return (
    <header className="{className} header">
        <Button className="sidebar-expander"><FaBars /></Button >
    </header>
  );
}

export default SiteHeader;
