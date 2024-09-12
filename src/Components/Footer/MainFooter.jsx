import * as React from 'react';
import { Link } from "react-router-dom";
function MainFooter() {

    const itemsAbout = [
        'What is JEF',
        'JEF leadership team',
        'JEF Smart Digitalization',
        'JEF L & D Centre',
      ];
    const itemsService = [
        'Power System Studies',
        'Power Quality Studies',
        'Earthing Studies',
        'LPS System Studies',
        'Instrumentation Studies',
      ];
    const itemsLocation = [
        'Mena',
        'Europe',
        'Asian'
      ]; 
    const itemsBusiness = [
        'Sectors',
        'Partners'
      ];  
    const itemsCareers = [
        'Working at JEF'
      ];   

  return (
    <main className="flex overflow-hidden flex-col items-center pt-24 bg-zinc-800">
      <div className="flex flex-wrap gap-24 tracking-wider items-start max-md:max-w-full">
        <Section title="About" items={itemsAbout} />
        <Section title="Services" items={itemsService} />
        <Section title="Locations" items={itemsLocation} />
        <Section title="Our Business" items={itemsBusiness} />
        <Section title="Careers" items={itemsCareers} />
      </div>
      <Footer />
    </main>
  );
}


function Footer() {
  return (
    <footer className="flex flex-col items-center pt-10 bg-zinc-800">
      <hr className="shrink-0 mt-2 max-w-full h-px border border-solid border-neutral-400 w-[1480px] max-md:mt-8" />
      <div className="flex flex-wrap gap-10 justify-between items-start mt-5 w-full max-w-[1480px] max-md:max-w-full">
        <div className="text-xl tracking-widest text-white uppercase w-[438px] max-md:max-w-full">
          FOLLOW jef ON SOCIAL MEDIA
        </div>
        <div className="flex flex-row w-[215px]">
          <img src="./FooterLogo/Link - Youtube.png" alt="YoutubeImg" className="object-contain w-full aspect-[1.75]"/>
          <img src="./FooterLogo/Link - Facebook.png" alt="FacebookImg" className="object-contain w-full aspect-[1.75]"/>
          <img src="./FooterLogo/Link - Linkedin.png" alt="LinkedInImg" className="object-contain w-full aspect-[1.75]"/>
          <img src="./FooterLogo/Link - Twitter.png" alt="TwitterImg" className="object-contain w-full aspect-[1.75]"/>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center  py-7 mt-6 w-screen text-white bg-stone-900  max-md:max-w-full">
        <div className="flex flex-wrap justify-between gap-6 w-full max-w-[1450px] max-md:max-w-full">
          <div className="flex shrink gap-4 self-start text-xl font-light basis-auto grow-0 tracking-widest">
            <Link  to="/PrivacyPolicy" reloadDocument>Privacy Policy</Link>
            <Link>· Terms of Use</Link>
            <Link to="/CookiePolicy" reloadDocument>· Cookie Policy</Link>
          </div>
          <div className="text-xl flex gap-4 tracking-wide max-md:max-w-full">
              Copyright 2023. All Rights Reserved © jeftechno | Designed by 
              <img src="./FooterLogo/HudbilLogo.png" alt="hudbilLogo" className='h-8' />
          </div>   
        </div>
      </div>
    </footer>
  );
}



function Section({ title, items }) {
  return (
    <section className="flex flex-col min-h-[234px] w-[219px]">
      <header className="w-full text-3xl font-bold tracking-widest text-red-700 uppercase whitespace-nowrap">
        {title}
      </header>
      <ul className="flex overflow-hidden flex-col mt-4 w-full text-base leading-none text-white">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col justify-center items-start py-2.5 w-full">
            <div className="flex items-center">
              <div className="self-stretch my-auto">{item}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default MainFooter;