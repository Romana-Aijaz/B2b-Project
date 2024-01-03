import './userList.css';
import AdminSidebar from '../../components/adminSidebar/AdminSidebar';
import UserListComponent from '../../components/userList/UserListComponent';
function UserList() {
  return (
    <div className='userlist-main-container'>
       <AdminSidebar />
       <UserListComponent />
    </div>
  );
}

export default UserList;