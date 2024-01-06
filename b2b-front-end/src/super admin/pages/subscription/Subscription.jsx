import AdminSidebar from '../../components/adminSidebar/AdminSidebar';
import './subscription.css';
import SubscriptionComponent from '../../components/subscriptionComponent/SubscriptionComponent';
import { useState } from 'react';

function Subscription() {
  const [openModal, setOpenModal] = useState(true)
  return (
    <div className='subscription-main-container'>
        <AdminSidebar openModal={openModal}/>
        <SubscriptionComponent setOpenModal={setOpenModal} openModal={openModal}/>
    </div>
  );
}

export default Subscription;