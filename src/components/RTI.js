import React from 'react';
import style from './CSS/rti.css';
import PageHeading from './Global/PageHeading';
import ActsIcon from './eCitizen/Icons/ActsRules.png'
import CommissionIcon from './eCitizen/Icons/GR.png'
import PenaltiesIcon from './eCitizen/Icons/legal-prosecution.png'
import WebsiteIcon from './eCitizen/Icons/world-wide-web.png'

const RTI = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div>
                <PageHeading heading='Right To Service'/>
                <div className='container'>
                    <div className='row d-flex'>
                    <div className='col-lg-2'>
                        <div className="sidebar-container">
                        <div className='sidebar-region'>
                            <div className='sidebar-block'>
                            <div className="sidebar-content">
                        <ul className="sidebar-menu">
                        <li className="sidebar-items " onClick={() => handleScroll('act')}>
                             <img src={ActsIcon} className='icon mx-3' alt='Contact Us Icon' />
                             <h6>The Act</h6>
                         </li>
                        <li className="sidebar-items" onClick={() => handleScroll('commission')}>
                             <img src={CommissionIcon} className='icon' alt='Contact Us Icon' />
                             <h6>The Commission</h6> 
                        </li>
                        <li className="sidebar-items" onClick={() => handleScroll('appeals')}>
                            <img src={PenaltiesIcon} className='icon' alt='Contact Us Icon' />
                        <h6>Appeals & Penalties</h6>
                        </li> 
                        <li className="sidebar-items" onClick={() => handleScroll('website')}>
                        <img src={WebsiteIcon} className='icon' alt='Contact Us Icon' />
                           <h6>Website</h6>
                     </li>
                        </ul>
                    </div>


                            </div>

                        </div>

                   </div>

</div>
<div className='col-lg-10'>
<div className="rti-container">
    <h2 id="act">Maharashtra Right To Public Services ACT 2015</h2>
    <p>
        The Maharashtra Right to Public Services Act, 2015 is enacted and is in force since 28.04.2015 to ensure that notified services are provided to the citizens in a transparent, speedy, and time-bound manner by various Government Departments and Public Authorities under the Government. Its objective is to provide easy, prompt, and time-bound services to the citizens.
    </p>
    <h3 id="commission">The Commission</h3>
    <p>
        The Maharashtra State Commission for Right to Public Service has been constituted under the above Act to monitor, coordinate, control, and improve the public services being provided by the Government. The Commission consists of a Chief Commissioner and six Commissioners. The headquarters of the Commission is at the New Administrative Building, Opposite Mantralaya, Mumbai, and the Divisional Offices of the Commissioners are at the six Divisional Headquarters.
    </p>
    <h3 id="appeals">Appeals & Penalties</h3>
    <p>
        If any notified service is not provided to any eligible person within stipulated time or is rejected without proper grounds, the concerned person may file 1st and 2nd appeals with the higher authorities, and if he is not satisfied with their decision, he may prefer a third appeal to the Commission. The erring officer is liable for a penalty up to Rs 5000/- per case. Notified Services rendered by this Department are as per the enclosed proforma.
    </p>
    <h3 id="website">Website</h3>
    <p>
        Website of the Maharashtra State Commission for Right to Service is: <a href="https://aaplesarkar.mahaonline.gov.in">https://aaplesarkar.mahaonline.gov.in</a>
    </p>
</div>

</div>


                    </div>

                </div>

        </div>
    );
}

export default RTI;
