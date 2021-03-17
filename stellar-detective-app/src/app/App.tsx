import React, { useState }  from 'react';
import './App.scss';
import SiteHeader from './site-header/site-header';
import LeftnavSidebar from './leftnav-sidebar/leftnav-sidebar';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSidebarCollapseChange = (value:boolean) => {
    setSidebarCollapsed(value);
  };

  return (
    <div className="app">
      <LeftnavSidebar className="app-sidebar" collapsed={sidebarCollapsed} />

      <div className="app-content">
        <SiteHeader className="app-header" sidebarCollapsed={sidebarCollapsed} handleSidebarCollapseChange={handleSidebarCollapseChange} />

        <body className="app-body">
        </body>

        <footer className="app-footer">
        </footer>
      </div>

    </div>
  );
}

export default App;
