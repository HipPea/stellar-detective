import React from 'react';
import './site-header.scss';

import Collapser from '../components/Buttons/collapser';


type SiteHeaderProperties = {
  className: string,
  sidebarCollapsed: boolean,
  handleSidebarCollapseChange: (value:boolean) => any
}
function SiteHeader({className, sidebarCollapsed, handleSidebarCollapseChange}: SiteHeaderProperties) {
  console.log(className);
  
  return (
    <header className={className}>
        <div className="header">
          <div className="header-content">
            <div className="button-container"> 
              <Collapser className="sidebar-expander" collapsed={sidebarCollapsed} handleCollapseChange={handleSidebarCollapseChange} />
            </div>
            <div className="site-title-container"> 
              <label className="site-title">Stellar Detective</label>
            </div>
          </div>
        </div>
    </header>
  );
}

export default SiteHeader;
