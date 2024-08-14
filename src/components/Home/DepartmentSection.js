import React from 'react';
import Icon1 from './IconsHome/SeniorCitizen.png'
import Icon2 from './IconsHome/Education.png'; // Update paths as necessary
import Icon3 from './IconsHome/Education.png'; // Update paths as necessary
import Icon4 from './IconsHome/Employment.png'; // Update paths as necessary
import Icon5 from './IconsHome/SocialIntegration.png'; // Update paths as necessary
import Icon6 from './IconsHome/SocialRemedies.png'; // Update paths as necessary
import Icon7 from './IconsHome/Awards.png'; // Update paths as necessary
import {Link} from 'react-router-dom'

const DepartmentSection = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="department_section">
      <div className="department">
        <div className="container text-center">
          <h2>SJSA Schemes</h2>
          <p className="subheading">Select Your Category to Start Your  Application</p>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_1">
                <img className="logo" src={Icon1} alt="Tribal Development Department" />
                <p>Senior Citizen Schemes</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_2">
                <img className="logo" src={Icon2} alt="Social Justice & Special Assistance Department" />
                <p>Education & Training Schemes</p>
                <Link to='/schemes'>
                <button >
                  <div>Visit Now</div> <i className="fas fa-angle-double-right"></i>
                </button>

                
                
                
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_3">
                <img className="logo" src={Icon3} alt="Higher and Technical Education Department" />
                <p>Economic Upliftment Schemes</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_4">
                <img className="logo" src={Icon4} alt="Other Backward Bahujan Welfare Department" />
                <p>Employment Schemes</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_5">
                <img className="logo" src={Icon5} alt="Minority Development Department" />
                <p>Social Integration Schemes</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_6">
                <img className="logo" src={Icon6} alt="Forest Department" />
                <p>Social Remedies Schemes</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="squre_7">
                <img className="logo" src={Icon7} alt="Planning Department" />
                <p>Awards</p>
                <Link to='/schemes' >
                <button>
                <div>Visit Now</div>
                 <i className="fas fa-angle-double-right"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
