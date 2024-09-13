import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import CookiePolicy from '../Pages/CookiePolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ScrollToTop from '../Components/ScrollToTop';

const Routers = () => { 
  return (
    <>
    <Router>
      < ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;