import './leftnav-sidebar.scss';
import { DashboardRoute, TransactionInsightRoute, WalletInsightRoute } from '../routing/routes';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaWallet, FaExchangeAlt } from 'react-icons/fa'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


type LeftnavSidebarProperties = {
  className: string,
  collapsed: boolean 
}
function LeftnavSidebar({className, collapsed}: LeftnavSidebarProperties) {
  return (
    <ProSidebar className={className} collapsed={collapsed}>
      <div className="leftnav-sidebar">
          <Menu iconShape="circle">
              <MenuItem icon={<FaTachometerAlt />}>Dashboard<Link to={DashboardRoute} /></MenuItem>
              <MenuItem icon={<FaExchangeAlt />}>Transaction Tracking<Link to={TransactionInsightRoute} /></MenuItem>
              <MenuItem icon={<FaWallet />}>Wallet Interactions<Link to={WalletInsightRoute} /></MenuItem>
          </Menu>
      </div>
    </ProSidebar>
  );
}

export default LeftnavSidebar;
