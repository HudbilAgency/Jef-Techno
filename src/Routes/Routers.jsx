import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import CookiePolicy from '../Pages/CookiePolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ScrollToTop from '../Components/ScrollToTop';
import Blog from '../Pages/Blog';
import BlogInside from '../Pages/BlogInside';
import GetInTouchForm from '../Pages/GetInTouchForm';
import GetInTouchPage from '../Pages/GetInTouchPage';
import EarthingStudies from '../Pages/EarthingStudies';
import Career from '../Pages/Career';
import TermsAndConditions from '../Pages/TermsAndConditions';
import LightningProtectionStudies from '../Pages/LightningProtectionStudies';
import PowerQualityStudies from '../Pages/PowerQualityStudies';
import Industries from '../Pages/Industries';


const Routers = () => { 
  return (
    <>
    <Router>
      < ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/BlogInside" element={<BlogInside/>} />
        <Route path="/GetInTouchForm" element={<GetInTouchForm/>} />
        <Route path="/GetInTouchPage" element={<GetInTouchPage/>} />
        <Route path="/EarthingStudies" element={<EarthingStudies/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        <Route path="/LightningProtectionStudies" element={<LightningProtectionStudies/>} />
        <Route path="/PowerQualityStudies" element={<PowerQualityStudies/>} />
        <Route path="/Industries" element={<Industries/>} />
        
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;