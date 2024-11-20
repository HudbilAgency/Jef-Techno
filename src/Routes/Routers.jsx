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


const Routers = () => { 
  return (
    <>
    <Router>
      < ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SmartDigitalization" element={<SmartDigitalization />} />
        <Route path="/L&D-Centre" element={<LD_Centre />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/BlogInside1" element={<BlogInside1/>} />
        <Route path="/BlogInside2" element={<BlogInside2/>} />
        <Route path="/GetInTouchForm" element={<GetInTouchForm/>} />
        <Route path="/GetInTouchPage" element={<GetInTouchPage/>} />
        <Route path="/EarthingStudies" element={<EarthingStudies/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        <Route path="/LightningProtectionStudies" element={<LightningProtectionStudies/>} />
        <Route path="/PowerQualityStudies" element={<PowerQualityStudies/>} />
        <Route path="/PowerSystemStudies" element={<PowerSystemStudies/>} />
        <Route path="/InstrumentEarthing" element={<InstrumentEarthing/>} />
        <Route path="/RenewableEnergyResource" element={<RenewableEnergyResource/>} />
        <Route path="/OilandGas" element={< OilandGas/>} />
        <Route path="/PowerUtilites" element={< PowerUtilites/>} />
        <Route path="/ManufacturingPlant" element={< ManufacturingPlant/>} />
        <Route path="/ProcessPlant" element={< ProcessPlant/>} />
        <Route path="/CommercialBuilding" element={< CommercialBuilding/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/LeadershipTeam" element={<LeadershipTeam/>} />
        <Route path="/JobDetails" element={<JobDetails/>} />
        <Route path="/Technical_Support_Engineer_JobDetails" element={<TSE_CareersPage/>} />
        <Route path="/Business_Development_Manager_JobDetails" element={<BDMcareers/>} />
        <Route path="/Test" element={<Test/>} />
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;