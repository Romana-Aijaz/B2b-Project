import './adminBody.css';
import Vector from '../../../Vector.svg'
import Frame395 from '../../../Frame395.svg'
import Frame397 from '../../../Frame397.svg'
import Frame387 from '../../../Frame387.svg'
import EllipseBlue from '../../../EllipseBlue.svg'
import Line16 from '../../../Line16.svg'
import EllipseOrange from '../../../EllipseOrange.svg'
import Vector3 from '../../../Vector3.svg'
function AdminBody() {
  return (
    <div className='admin-body-container'>
       <div className='dashboard-heading'>
          Dashboard
       </div>
       <div className='total-count-main-container'>
        <div className='total-count-inner-container'>
            <div className='total-heading-container'>
                <div className='total-heading'>Total Users</div>
                <div className='total-value'>72,825</div>
            </div>
            <div className='total-graph-container'>
                <div className='graph-heading'>+22%</div>
                <div className='graph-icon'>
                <img src={Vector} />
                </div>
            </div>
        </div>
        <div className='total-count-inner-container'>
        <div className='total-heading-container'>
                <div className='total-heading'>Total Revenue</div>
                <div className='total-value'>72,825</div>
            </div>
            <div className='total-graph-container'>
                <div className='graph-heading'>+22%</div>
                <div className='graph-icon'>
                <img src={Vector} />
                </div>
            </div>
        </div>
        <div className='total-count-inner-container'>
        <div className='total-heading-container'>
                <div className='total-heading'>Total Visitors</div>
                <div className='total-value'>72,825</div>
            </div>
            <div className='total-graph-container'>
                <div className='graph-heading'>+22%</div>
                <div className='graph-icon'>
                <img src={Vector} />
                </div>
            </div>
        </div>
       </div>
       <div className='revenue-state-main-container'>
     
        <div className='revenue-state-heading'>Revenue Stats</div>
        <div className='revenue-main-container'>
        <div className='vertical-value-container'>
            <div className='vertical-value'>$8500</div>
            <div className='vertical-value'>$4000</div>
            <div className='vertical-value'>$350</div>
            <div className='vertical-value'>$0</div>
        </div>
        <div className='revenue-graph'>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
            <div className='vertical-lines'><img src={Frame395} /></div>
            <div className='vertical-lines'><img src={Frame397} /></div>
        </div>
       </div>
       <div className='horizontal-value-container'>
        <div className='horizontal-value'>22</div>
        <div className='horizontal-value'>24</div>
        <div className='horizontal-value'>26</div>
        <div className='horizontal-value'>28</div>
        <div className='horizontal-value'>30</div>
        <div className='horizontal-value'>02</div>
        <div className='horizontal-value'>04</div>
        <div className='horizontal-value'>06</div>
        <div className='horizontal-value'>08</div>
        <div className='horizontal-value'>10</div>
        <div className='horizontal-value'>12</div>
        <div className='horizontal-value'>14</div>
        <div className='horizontal-value'>16</div>
        <div className='horizontal-value'>18</div>
        <div className='horizontal-value'>12</div>
        <div className='horizontal-value'>14</div>
        <div className='horizontal-value'>16</div>
        <div className='horizontal-value'>18</div>
       </div>
       </div>
       <div className='footer-revenue-main-container'>
        <div className='footer-revenue-inner-container'>
            <div className='revenue-device-heading'>Revenue By Device</div>
            <div className='rolling-icon-container'>
                <div className='rolling-icon'><img src={Frame387} /></div>
            </div>
            <div className='revenue-detail-outer-container'>
            <div className='revenue-detail-container'>
            <div className='left-container'>
                <div className='left-inner-container'>
                    <img src={EllipseBlue} className='dot-container'/>
                    <div className='left-text'>Free</div>
                    <div className='left-number'>800</div>
                </div>
                <div className='left-inner-container'>
                    <img src={EllipseOrange} className='dot-container'/>
                    <div className='left-text'>Gold</div>
                    <div className='left-number'>755</div>
                </div>
            </div>
              <div className='vertical-divider'></div>
            <div className='right-container'>
            <div className='right-inner-container'>
                    <img src={EllipseOrange} className='dot-container'/>
                    <div className='left-text'>Gold</div>
                    <div className='left-number'>755</div>
                </div>
                <div className='right-inner-container'>
                    <img src={EllipseOrange} className='dot-container'/>
                    <div className='left-text'>Gold</div>
                    <div className='left-number'>755</div>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='footer-revenue-inner-container'>
            <div className='footer-heading-container'>
            <div className='revenue-device-heading'>Traffic</div>
            <div className='month-heading-container'>
            <div className='revenue-device-heading'>Month</div>
            </div>
         </div>
         <div className='date-container'>
         Jan 16 - Jan 30 store visits chart
         </div>
         <div className='footer-graph-container'>
                <img src={Line16} className='breaking-lines'/>
                <img src={Line16} className='breaking-lines'/>
                <img src={Line16} className='breaking-lines'/>
                <img src={Line16} className='breaking-lines'/>
                <img src={Line16} className='breaking-lines'/>
                <img src={Line16} className='breaking-lines'/>
                <img src={Vector3} className='vector-3' />
        </div>
        <div className='footer-graph-values-container'>
            <div className='footer-graph-value'>16</div>
            <div className='footer-graph-value'>18</div>
            <div className='footer-graph-value'>20</div>
            <div className='footer-graph-value'>24</div>
            <div className='footer-graph-value'>26</div>
            <div className='footer-graph-value'>28</div>
            <div className='footer-graph-value'>30</div>
        </div>
        </div>
       </div>
    </div>
  );
}

export default AdminBody;