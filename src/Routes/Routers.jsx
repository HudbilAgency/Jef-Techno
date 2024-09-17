import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import CookiePolicy from '../Pages/CookiePolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import ScrollToTop from '../Components/ScrollToTop';
import Blog from '../Pages/Blog';
import BlogInside from '../Pages/BlogInside';
import GetInTouchForm from '../Pages/GetInTouchForm';


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
        
      </Routes> 
    </Router>
    </>
  );
}

export default Routers;