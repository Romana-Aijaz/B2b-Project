import './subscriptionComponent.css';
import checkmark from '../../../checkmark.svg'

function SubscriptionComponent(props) {
    return (
   <div className='subscription-body-main-container' style={{backgroundColor: props.openModal ? '#8C8C8C' : 'white'}}>
   {props.openModal ?  <div className='edit-plan-modal'>
        <div className='edit-plan-heading'>Edit Plan</div>
       <div className='input-edit-container'>
       <div className='heading-input'>Short Description</div>
            <input className='heading-input-field' placeholder='Best For Personal Use'/>
       </div>
       <div className='input-edit-container'>
       <div className='heading-input'>Short Description</div>
            <input className='heading-input-field' placeholder='Best For Personal Use'/>
       </div>
       <div className='input-edit-container'>
        <div className='features-add'>
       <div className='features-heading-input'>Short Description</div>
       <div className='add-heading'>Add</div>
       </div>
            <input className='heading-input-field' placeholder='Best For Personal Use'/>
            <input className='heading-input-field' placeholder='Best For Personal Use'/>
       </div>
       <div className='modal-btn-container'>
        <div className='modal-btn-inner-container'>
            <button className='cancel-modal-btn' onClick={()=>(props.setOpenModal(false))}>Cancel</button>
            <button className='edit-modal-btn'>Edit</button>
        </div>
       </div>
    </div> : null }
    <div className='subscription-plan-container'>
        <div className='subscription-plan-heading'>Our Subscription Plans</div>
        <div className='subscription-box-container'>
            <div className='subscription-box'>
                <div className='box-category-container'>
                    <div className='cat-heading'>Free</div>
                    <div className='cat-text'>Best For Personal Use</div>
                </div>
                <div className='box-price-container'>
                    <div className='price-heading'>$0</div>
                    <div className='price-text'> /month</div>
                </div>
                <div className='features-container'>
                    <div className='feature-heading'>What you get:</div>
                    <div className='feature-list-container'>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>Regular Ranking</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>100 Credits to Contact </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>What you get</div>
                        </div>
                    </div>
                </div>
                <div className='edit-btn-container'>
                    <button className='edit-subscription-btn' onClick={() => props.setOpenModal(true)}>Edit</button>
                </div>
            </div>
            <div className='subscription-box'><div className='box-category-container'>
                    <div className='cat-heading'>Free</div>
                    <div className='cat-text'>Best For Personal Use</div>
                </div>
                <div className='box-price-container'>
                    <div className='price-heading'>$0</div>
                    <div className='price-text'> /month</div>
                </div>
                <div className='features-container'>
                    <div className='feature-heading'>What you get:</div>
                    <div className='feature-list-container'>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>Regular Ranking</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>100 Credits to Contact </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>What you get</div>
                        </div>
                    </div>
                </div>
                <div className='edit-btn-container'>
                    <button className='edit-subscription-btn' onClick={() => props.setOpenModal(true)}>Edit</button>
                </div></div>
            <div className='subscription-box'><div className='box-category-container'>
                    <div className='cat-heading'>Free</div>
                    <div className='cat-text'>Best For Personal Use</div>
                </div>
                <div className='box-price-container'>
                    <div className='price-heading'>$0</div>
                    <div className='price-text'> /month</div>
                </div>
                <div className='features-container'>
                    <div className='feature-heading'>What you get:</div>
                    <div className='feature-list-container'>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>Regular Ranking</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>100 Credits to Contact </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>What you get</div>
                        </div>
                    </div>
                </div>
                <div className='edit-btn-container'>
                    <button className='edit-subscription-btn' onClick={() => props.setOpenModal(true)}>Edit</button>
                </div></div>
            <div className='subscription-box'><div className='box-category-container'>
                    <div className='cat-heading'>Free</div>
                    <div className='cat-text'>Best For Personal Use</div>
                </div>
                <div className='box-price-container'>
                    <div className='price-heading'>$0</div>
                    <div className='price-text'> /month</div>
                </div>
                <div className='features-container'>
                    <div className='feature-heading'>What you get:</div>
                    <div className='feature-list-container'>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>Regular Ranking</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>100 Credits to Contact </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>10 Products Display</div>
                        </div>
                        <div className='feature'>
                            <div className='feature-icon'>
                                <img src={checkmark} alt='tick-icon' />
                            </div>
                            <div className='feature-text'>What you get</div>
                        </div>
                    </div>
                </div>
                <div className='edit-btn-container'>
                    <button className='edit-subscription-btn' onClick={() => props.setOpenModal(true)}>Edit</button>
                </div></div>
        </div>
    </div>
    <div className='customer-subscription-container'>
        <div className='customer-subscription-heading'>Customer Subscriptions</div>
        <div className='user-heading-container'>
        <div className='user-heading'>Subscriptions</div>
        <div className='user-heading'>Products</div>
        <div className='user-heading'>Customer</div>
        <div className='user-heading'>Status</div>
    </div>
    <div className='divider'></div>
    <div className='user-heading-container'>
        <div className='subscription-id'>#112277</div>
        <div className='customer-value'>Mobi Foods</div>
        <div className='customer-value'>Silver</div>
        <div className='customer-value'>jane@micr...</div>
    </div>
    <div className='user-heading-container'>
        <div className='subscription-id'>#112277</div>
        <div className='customer-value'>Mobi Foods</div>
        <div className='customer-value'>Silver</div>
        <div className='customer-value'>jane@micr...</div>
    </div>
    <div className='user-heading-container'>
        <div className='subscription-id'>#112277</div>
        <div className='customer-value'>Mobi Foods</div>
        <div className='customer-value'>Silver</div>
        <div className='customer-value'>jane@micr...</div>
    </div>
    </div>
   </div>)
  }
  
  export default SubscriptionComponent;