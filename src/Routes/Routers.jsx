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
import ServicePage from '../Pages/ServicePage';
import Career from '../Pages/Career';
import TermsAndConditions from '../Pages/TermsAndConditions';


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
        <Route path="/ServicePage" element={<ServicePage/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;