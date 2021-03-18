import React, { useState }  from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteHeader from './site-header/site-header';
import SiteViewport from './site-viewport/site-viewport';
import SiteFooter from './site-footer/site-footer';
import LeftnavSidebar from './leftnav-sidebar/leftnav-sidebar';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarCollapseChange = (value:boolean) => {
    setSidebarCollapsed(value);
  };

  return (
    <Router>
      <div className="app">
        <LeftnavSidebar className="app-sidebar" collapsed={sidebarCollapsed} />

        <div className="app-content">
          <SiteHeader className="app-header" sidebarCollapsed={sidebarCollapsed} handleSidebarCollapseChange={handleSidebarCollapseChange} />

          <SiteViewport className="app-body" />

          <SiteFooter className="app-footer" />
        </div>

      </div>
    </Router>
  );
}

export default App;
