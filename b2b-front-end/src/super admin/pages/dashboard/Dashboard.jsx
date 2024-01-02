import AdminSidebar from '../../components/adminSidebar/AdminSidebar';
import './dashboard.css';
import AdminBody from '../../components/adminBody/AdminBody';

function Dashboard() {
  return (
    <div className='admin-main-container'>
        <AdminSidebar />
        <AdminBody />
    </div>
  );
}

export default Dashboard;