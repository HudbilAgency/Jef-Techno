import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import CookiePolicy from '../Pages/CookiePolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ScrollToTop from '../Components/ScrollToTop';
import Blog from '../Pages/Blog';

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
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;