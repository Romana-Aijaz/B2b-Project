import './userListComponent.css';
import search1 from '../../../search1.svg'
import Vertical from '../../../Vertical.svg'
function UserListComponent() {
    return (
        <div className='userlist-body-container'>
            <div className='userlist-header-container'>
            <div className='userList-heading'>
          User List
       </div>
       <div className='search-input-container'>
        <img src={search1} />
          <input type='text' placeholder='Search...' className='search-input'/>
        </div>
    </div>
    <div className='user-heading-container'>
        <div className='user-heading'>User Name</div>
        <div className='user-heading'>Company</div>
        <div className='user-heading'>Subscription</div>
        <div className='user-heading'>Email</div>
        <div className='user-heading'>Country</div>
        <div className='user-heading'>Join Date</div>
        <div className='user-heading'>Status</div>
        <div className='user-heading'>Action</div>
    </div>
    <div className='divider'></div>
    <div className='user-heading-container'>
        <div className='user-value'>Jane Cooper</div>
        <div className='user-value'>Mobi Foods</div>
        <div className='user-value'>Silver</div>
        <div className='user-value'>jane@micr...</div>
        <div className='user-value'>United States</div>
        <div className='user-value'>12 Dec 2028</div>
        <button className='active-status'>Active</button>
        <div className='user-heading'>
            <img src={Vertical} />
        </div>
    </div>
    <div className='user-heading-container'>
        <div className='user-value'>Jane Cooper</div>
        <div className='user-value'>Mobi Foods</div>
        <div className='user-value'>Silver</div>
        <div className='user-value'>jane@micr...</div>
        <div className='user-value'>United States</div>
        <div className='user-value'>12 Dec 2028</div>
        <button className='active-status'>Active</button>
        <div className='user-heading'>
            <img src={Vertical} />
        </div>
    </div>
    <div className='user-heading-container'>
        <div className='user-value'>Jane Cooper</div>
        <div className='user-value'>Mobi Foods</div>
        <div className='user-value'>Silver</div>
        <div className='user-value'>jane@micr...</div>
        <div className='user-value'>United States</div>
        <div className='user-value'>12 Dec 2028</div>
        <button className='active-status'>Active</button>
        <div className='user-heading'>
            <img src={Vertical} />
        </div>
    </div>
    <div className='user-heading-container'>
        <div className='user-value'>Jane Cooper</div>
        <div className='user-value'>Mobi Foods</div>
        <div className='user-value'>Silver</div>
        <div className='user-value'>jane@micr...</div>
        <div className='user-value'>United States</div>
        <div className='user-value'>12 Dec 2028</div>
        <button className='active-status'>Active</button>
        <div className='user-heading'>
            <img src={Vertical} />
        </div>
    </div>
    <div className='user-heading-container'>
        <div className='user-value'>Jane Cooper</div>
        <div className='user-value'>Mobi Foods</div>
        <div className='user-value'>Silver</div>
        <div className='user-value'>jane@micr...</div>
        <div className='user-value'>United States</div>
        <div className='user-value'>12 Dec 2028</div>
        <button className='active-status'>Active</button>
        <div className='user-heading'>
            <img src={Vertical} />
        </div>
    </div>
        </div>
    );
  }
  
  export default UserListComponent;