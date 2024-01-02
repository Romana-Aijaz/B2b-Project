import './adminSidebar.css';
import logo from '../../../logo.svg'
function AdminSidebar() {
  return (
    <div className='sidebar-main-container'>
        <div className='heading-container'>
            <div className='.logo'>
            <img src={logo} alt='Logo' className='logo-image'/>
            </div>
            <div className='heading-content'>RS Global Ties</div>
        </div>
        <div className='sidebar-body-container'>
            <div className='sidebar-body-content'>
                Dashboard
            </div>
            <div className='sidebar-body-content'>
                User List
            </div>
            <div className='sidebar-body-content'>
                Product List
            </div>
            <div className='sidebar-body-content'>
                Subscriptions
            </div>
        </div>
    </div>
  );
}

export default AdminSidebar;