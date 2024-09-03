import { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar.jsx';
import HeadlineSection from './Pages/HeadlineSection.jsx';
import Divider from './Pages/Divider.jsx';
import FooterIcon from './Pages/FooterIcon.jsx';
import BackgroundImage from './Pages/BackgroundImage.jsx';

function App() {

  return (
    <div className="flex relative flex-col py-6 w-full min-h-[1080px] max-md:max-w-full">
    <BackgroundImage />
    <Navbar />
    <Divider />
    <FooterIcon />
    <HeadlineSection />
  </div>
  )
}

export default App
