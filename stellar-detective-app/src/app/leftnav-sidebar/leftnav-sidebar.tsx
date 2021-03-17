import './leftnav-sidebar.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaWarehouse } from 'react-icons/fa'


type LeftnavSidebarProperties = {
  className: string
}
function LeftnavSidebar({className}: LeftnavSidebarProperties) {
  console.log(className);
  
  return (
    <ProSidebar className={className}>
        <div className="leftnav-sidebar">
            <Menu iconShape="circle">
                <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
                <SubMenu title="Insights" icon={<FaWarehouse />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </div>
    </ProSidebar>
  );
}

export default LeftnavSidebar;
