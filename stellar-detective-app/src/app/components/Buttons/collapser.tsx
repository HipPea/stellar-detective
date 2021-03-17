import Button from '@material-ui/core/Button';
import { FaBars } from 'react-icons/fa'

type CollapserProperties = {
    className: string,
    collapsed: boolean,
    handleCollapseChange: (value:boolean) => any
  }
function Collapser({className, collapsed, handleCollapseChange}:CollapserProperties) {
    
    return (
      <Button className={className} onClick={() => {handleCollapseChange(!collapsed);}}><FaBars /></Button >
    );
  }
  
  export default Collapser;