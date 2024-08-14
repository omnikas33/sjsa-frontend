import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import BriefHistory from './components/Aboutus/BriefHistory.js';
import Mission from './components/Aboutus/Mission.js';
import DepartmentalStatistics from './components/Aboutus/DepartmentalStatistics.js';
import OrgSetup from './components/Aboutus/OrgSetup.js';
import ContactUs from './components/Aboutus/ContactUs.js';
import SchemesComponent from './components/Scheme/SchemesComponent.js';
import Institutions from './components/institution/Institutions.js';
import ActsAndRules from './components/eCitizen/ActsAndRules.js';
import RightToAct from './components/eCitizen/RightToAct.js';
import Gr from './components/eCitizen/Gr.js';
import Ebook from './components/eCitizen/Ebook.js';
import Corporations from './components/Corporations';
import Topbar from './components/Global/Topbar.js';
import Navbar from './components/Global/Navbar.js';
import AlliedOffices from './components/AlliedOffices/AlliedOffices.js';
import Beneficiary from './components/Beneficiary';
import RTI from './components/RTI';
import SubSchemeDetails from './components/SubSchemeDetails';
import SubSchemeCorp from './components/SubSchemeCorp';
import { FontSizeProvider } from './screens/FontSizeContext'; import { ThemeProvider } from './screens/ThemeContext.js'; // Import ThemeProvider
import SidebarIcons from './screens/SidebarIcons.js';
import Login from './components/Login.js';
import Department from './components/Department/Department.js'
import Sponsors from './components/Global/Sponsors.js';
import DepartmentSection from './components/Home/DepartmentSection.js';

import Top from './components/Global/Top.js';
import SchemeDetailsPage from './components/Scheme/SchemeDetailsPage.js';
import Footer from './components/Global/Footer.js';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap with ThemeProvider */}
        <Router>
          <>
          <Top/>
            <Topbar />
            <Navbar />
            {/* <SidebarIcons /> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<UserManagement/> } /> */}
              <Route path="/" element={<Home />} />
              {/* About Us */}
              <Route path="/about/brief-history" element={<BriefHistory />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/departmental-statistics" element={<DepartmentalStatistics />} />
              <Route path="/about/org-setup" element={<OrgSetup />} />
              <Route path="/about/contactUs" element={<ContactUs />} />
              {/* Allied Offices */}
              <Route path="/allied-offices" element={<AlliedOffices />} />
              {/* Schemes */}
              <Route path="/schemes" element={<SchemesComponent />} />
              <Route path="/scheme-details/:schemeId" element={<SchemeDetailsPage />} />
              {/* Institutions */}
              <Route path="/institutions" element={<Institutions />} />
              {/* eCitizen */}
              <Route path="/e-citizen/acts-rules" element={<ActsAndRules />} />
              <Route path="/e-citizen/right-to-information" element={<RightToAct />} />
              <Route path="/e-citizen/government-resolutions" element={<Gr />} />
              <Route path="/e-citizen/e-books" element={<Ebook />} />
x
              <Route path="/corporations" element={<Corporations />} />
              <Route path="/beneficiaries" element={<Beneficiary />} />
              <Route path="/rts-act" element={<RTI />} />
              <Route path="/scheme/:schemeId/sub-scheme/:subSchemeId" element={<SubSchemeDetails />} />
              <Route path="/subscheme/:schemeId/:subSchemeId" element={<SubSchemeCorp />} />    
              {/* Department */}
              <Route path="/department" element={<Department />} />
            </Routes>
            {/* <Sponsors/> */}
            <Footer />
          </>
        </Router>
    </ThemeProvider>
  );
};

export default App;
