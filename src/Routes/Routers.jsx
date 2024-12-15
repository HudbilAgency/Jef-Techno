import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import CookiePolicy from '../Pages/CookiePolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ScrollToTop from '../Components/ScrollToTop';
import Blog from '../Pages/Blog';
import BlogInside1 from '../Pages/BlogInside1';
import GetInTouchForm from '../Pages/GetInTouchForm';
import GetInTouchPage from '../Pages/GetInTouchPage';
import EarthingStudies from '../Pages/EarthingStudies';
import Career from '../Pages/Career';
import TermsAndConditions from '../Pages/TermsAndConditions';
import LightningProtectionStudies from '../Pages/LightningProtectionStudies';
import PowerQualityStudies from '../Pages/PowerQualityStudies';
import PowerSystemStudies from '../Pages/PowerSystemStudies'
import EmiEmc from '../Pages/EMI-EMC';
import RootCause from '../Pages/RootCause';
import AboutUs from '../Pages/AboutUs';
import Test from '../Pages/Test';
import LeadershipTeam from '../Pages/LeadershipTeam';
import JobDetails from '../Pages/JobDetails';
import TSE_CareersPage from '../Pages/TSE_CareersPage';
import BDMcareers from '../Pages/BDMcareers';
import InstrumentEarthing from '../Pages/InstrumentEarthing';
import OilandGas from '../Pages/Oil&Gas';
import PowerUtilites from '../Pages/PowerUtilites';
import ManufacturingPlant from '../Pages/ManufacturingPlant';
import ProcessPlant from '../Pages/ProcessPlant';
import CommercialBuilding from '../Pages/CommercialBuilding';
import RenewableEnergyResource from '../Pages/RenewableEnergyResource';
import SmartDigitalization from '../Pages/SmartDigitalization';
import LD_Centre from '../Pages/L&D-Centre';
import BlogInside2 from '../Pages/BlogInside2';
import BlogInside3 from '../Pages/BlogInside3';
import BlogInside4 from '../Pages/BlogInside4';

const Routers = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SmartDigitalization" element={<SmartDigitalization />} />
          <Route path="/L&D-Centre" element={<LD_Centre />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/BlogInside1" element={<BlogInside1 />} />
          <Route path="/BlogInside2" element={<BlogInside2 />} />
          <Route path="/blog/enhance-reliability-efficiency-compliance-electrical-grid-power-system-studies" element={<BlogInside3 />} />
          <Route path="/BlogInside4" element={<BlogInside4 />} />
          <Route path="/get-in-touch" element={<GetInTouchForm />} />
          <Route path="/GetInTouchPage" element={<GetInTouchPage />} />
          <Route path="/earthing-studies" element={<EarthingStudies />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/lightning-protection-studies" element={<LightningProtectionStudies />} />
          <Route path="/power-quality-studies" element={<PowerQualityStudies />} />
          <Route path="/power-system-studies" element={<PowerSystemStudies />} />
          <Route path="/emi-emc" element={<EmiEmc />} />
          <Route path="/root-cause-analysis" element={<RootCause />} />
          <Route path="/instrumentation-earthing-studies" element={<InstrumentEarthing />} />
          <Route path="/industries/renewableenergy" element={<RenewableEnergyResource />} />
          <Route path="/industries/oilandgas" element={< OilandGas />} />
          <Route path="/industries/powerutilities" element={< PowerUtilites />} />
          <Route path="/industries/manufacturingplant" element={< ManufacturingPlant />} />
          <Route path="/industries/processplant" element={< ProcessPlant />} />
          <Route path="/industries/commercialbuilding" element={< CommercialBuilding />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/leadership-team" element={<LeadershipTeam />} />
          <Route path="/JobDetails" element={<JobDetails />} />
          <Route path="/Technical_Support_Engineer_JobDetails" element={<TSE_CareersPage />} />
          <Route path="/Business_Development_Manager_JobDetails" element={<BDMcareers />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;