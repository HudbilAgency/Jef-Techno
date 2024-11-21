import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import MainFooter from '../Components/Footer/MainFooter';
import { Helmet } from 'react-helmet';

const TSE_CareersPage = () => {
  return (
    <div>
        < JobDetails />
    </div>
  )
}


const jobOverviewData = {
  title: "Technical Support Engineer",
  type: "Full Time",
  category: "Engineer",
  experience: "5 Years",
  degree: "Master",
  salary: "12854 AED",
  gender: "All",
  location: "UAE"
};

const iconTextItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0c893bf332dc34edb84763976d78e7514f60e452663cbbf15b2c426fae95741?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", text: "Full time" },
  // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc582fb81a3a7a17863b2c30e7f80a664d8c08f51514a8b03cd1568c2212adf8?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", text: "12854 AED" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aad532364fe57b522dac121a9ba4aad021d2c2f53556e2277d6daa3ba45b1580?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", text: "UAE" }
];

function JobDetails() {
  return (
    <>
    <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V6J93962T6"></script>
        <script>
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V6J93962T6');
                `}
        </script>
      </Helmet>
     < Navbar/>
     <main className="flex overflow-hidden flex-col bg-neutral-100 pb-10 max-md:pb-6rem">
      <header className="flex relative flex-col px-16 pt-64 pb-28 w-full text-6xl font-bold text-center text-white min-h-[26.375rem] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/74998d801ce9dc441f320957ef5f261d87fbade85d68d9d233164d48e0d2d61d?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-cover absolute inset-0 size-full" />
        <h1 className='text-4xl'>Job Details</h1>
      </header>

      <section className="flex p-4 lg:p-10 xl:p-10 flex-col items-start self-center mt-24 w-full max-w-[81rem] max-md:mt-10 max-md:max-w-full">
        <article className="flex flex-col self-stretch pt-8 w-full rounded-3xl  max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base text-red-700 max-md:max-w-full">
            <span className="flex flex-col justify-center py-1 px-2 rounded-xl bg-red-700 bg-opacity-10">
              12 min ago
            </span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbc56d84eb925a582acb30e6b9d6a52b24cb413a44e882b3923619e273f5f71?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 w-6 aspect-square" />
          </div>

          <div className="flex flex-wrap gap-5 items-start self-start mt-6 text-stone-900 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd96b3744a20ca3c949b675a1d60fa799c5f2a3d8e6f24035b4bc6cb08a405a1?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="JEF Group logo" className="object-contain shrink-0 w-10 aspect-square" />
            <div className="flex flex-col min-w-[15rem] max-md:max-w-full">
              <h2 className="text-4xl font-semibold max-md:max-w-full">
                Technical Support Engineer, UAE
              </h2>
              <p className="mt-2 text-base">JEF Group</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-between items-end mt-7 w-full text-base font-semibold max-md:max-w-full">
            <div className="flex gap-6 items-end text-gray-500 min-w-[15rem] max-md:max-w-full">
              {iconTextItems.map((item, index) => (
                <IconText key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
            <button className="overflow-hidden gap-2.5 self-stretch py-2 px-5 text-white bg-red-700 rounded-lg min-h-[3.125rem] min-w-[15rem] w-[18.813rem]">
              Apply Job
            </button>
          </div>
        </article>

        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <JobInfoSection />
            <aside className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <JobOverviewCard data={jobOverviewData} />
            </aside>
          </div>
        </div>
      </section>
    </main>
    < MainFooter />
    </>
  );
}



function IconText({ icon, text }) {
  return (
    <div className="flex gap-3 items-center">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-4 md:w-5 aspect-square" />
      <span className="self-stretch text-xs md:text-sm my-auto">{text}</span>
    </div>
  );
}


function JobOverviewCard({ data }) {
  const overviewItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60433d2c11128851b45e1e5d63b975d51f6902a1dfa349d01e4dbbf6b888db26?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Job Title", value: data.title },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0c893bf332dc34edb84763976d78e7514f60e452663cbbf15b2c426fae95741?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Job Type", value: data.type },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1253f42025d325206476cbdc92730be5095b7c0c7f18790cc9f3297f429068c7?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Category", value: data.category },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba06d9e64df4ce55a7b5feb493a35b7ecf67a20c7114af4d78ab8b2f5eef5e81?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Experience", value: data.experience },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/155650577aa8d07140c2cbf2322c24237b386f416aefe0a8e58659623aa521bf?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Degree", value: data.degree },
    // { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84ee00fc4d8d8132690f55f2492645807ed4bf2a8e9b324d919f0d382485001f?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Offered Salary", value: data.salary },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39226579ae1262ad778140d7abe4069e4d27370b4ccf3835f083fce88b7c705c?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Gender", value: data.gender },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da26cb8d131bfb1544ecb718e8c714f37adb154d94689a11ce4eae48cb23da2?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3", label: "Location", value: data.location }
  ];

  return (
    <section className="flex overflow-hidden flex-col px-5 pt-7 pb-5 mx-auto w-full rounded-3xl bg-red-700 bg-opacity-10 max-md:mt-6">
      <h3 className="text-lg font-bold text-stone-900">Job Overview</h3>
      <div className="flex flex-col mt-8 w-full text-base">
        {overviewItems.map((item, index) => (
          <div key={index} className="flex gap-5 items-start mt-7 w-full first:mt-0">
            <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="font-medium text-stone-900">{item.label}</div>
              <div className=" text-gray-500">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <img src="./CareerPage/TseCareersMap.png" alt="map" className='mt-5'/> */}
    </section>
  );
}

 function JobInfoSection() {
    const services = [
        'High Voltage Engineering',
        'EMI & EMC Studies',
        'Lightning Protection Adequacy Audit',
        'Earthing integrity studies',
        'Root Cause Analysis and Power Quality Studies',
        'Transients (IC studies)',
        'Power System studies'
      ];
      const Profile = [
        'Experience: 3-5 years in Project Management in EPC, Oil & Gas Companies.',
        'Bachelors/Masters in Electrical Engineering (Preferably from Power System & energy Background)',
        'Proven experience in technical support or a similar role within the electrical engineering industry.',
        'Strong understanding of electrical systems and components, specifically with good understanding of Power System Studies, Power Quality Engineering.',
        'Excellent communication and interpersonal skills',
        'Excellent working skills in MS Office package ( Excel, Power Point & Word)'
      ];

      const whatweoffer = [
        'Salary – Best in the industry',
        '5-day work week',
        'Health Insurance',
        'Travel Reimbursement',
        'Laptop',
        'Corporate mobile connection',
        'Structured learning & upskilling programs conducted by subject matter experts',
        'Structured leadership development initiatives designed to foster professional growth and advancement',
        'Opportunity to Collaborate with highly accomplished technical experts in the field and work with skilled and dynamic team across geographies',
        'As a culture, priority is always given to talent within the organization for growth',
        'Structured learning & upskilling programs conducted by subject matter experts'        
      ];

      const Responsibility = [
            '|Attending Technical Inquiries:|  Respond to technical inquiries from clients promptly and professionally, providing accurate information and solutions to their queries.',
            '|Providing Technical Support:| Offer technical assistance to the project team to ensure smooth project execution, Collaborate with the project team to address technical challenges and provide solutions.',
            '|Preparing Technical Offers:| Assist in the preparation of technical offers by analyzing project requirements, developing cost estimates, and creating comprehensive proposals aligned with client needs.',
            '|Technical Documentation:| Develop and maintain technical documents such as method statements, approach plans, and other deliverable to support project implementation, ensuring adherence to industry standards and regulatory requirements.',
            '|Client Interface:| Serve as a primary interface between our clients and the project team, establishing strong relationships, understanding client expectations, and effectively communicating technical requirements and project updates.',
            '|Technical Meetings:| Attend technical meetings with clients, project stakeholders, and internal teams to discuss project requirements, progress, and any technical issues or challenges that may arise.',
            '|Reporting to Technical Manager:| Support the Technical Manager in preparing offers, proposals, and technical presentations, leveraging your expertise to contribute valuable insights and recommendations.',
            '|Proficiency in MS Office:| Demonstrate proficiency in Microsoft Office applications, particularly Excel, Word, and PowerPoint, to create and manage technical documents, presentations, and reports.',
            '|Coordination with Project Team:| Collaborate closely with the project team, including engineers, technicians, and other stakeholders, to ensure alignment on technical specifications, project timelines, and deliverables.'
      ];
  return (
    <section className="flex flex-col pb-10 w-[76%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start mt-6 text-base text-stone-900 max-md:mt-10 max-md:max-w-full">
        {/* Rest of the content remains the same as in original, just wrapped in semantic HTML tags */}
        <article className="flex flex-col self-stretch max-md:max-w-full">
          <h2 className="text-2xl text-red-700 font-semibold">About JEF:</h2>
          <p className="mt-8 leading-6 max-md:max-w-full">
            JEF is an innovative company with Indian roots and an extensive international presence across 24 countries in the ASEAN, Middle Eastern, African and European regions. We have been the preferred vendor for prestigious projects in many countries with 3000+ global customers and an astounding 90% customer retention rate.
          </p>
          <p className='mt-8'>With over 30 years in the industry, we have a proven track record of successfully implementing
            several engineering solutions. Our services span the entire spectrum of electrical engineering
            from low, medium to high voltage and extra high voltage.</p>
            <p className='mt-8'>
            Over the last three decades, JEF has supported organizations across a range of industries to help
            ensure the safety of their manpower and reliability of their systems.
            </p>
            <p className='mt-8'>
            We have several innovations, patents, and industry firsts which have made us a preferred partner
            for customers.
            </p>
          {/* Continue with rest of content structure */}
        </article>

        <section>
        <SectionTitle>About Business:</SectionTitle>
        <h3 className="mt-8 font-semibold">Technical Services:</h3>
        <Paragraph>
          Electrical systems need to be safe and reliable to ensure critical processes in industries, run without interruptions.
        </Paragraph>
        <Paragraph>
          Yet, they invariably experience outages due to tripping and equipment failures. Proper design, periodic health analysis of equipment, study of the interplay between various equipment in the system under varied operating conditions are necessary & essential to ensure safe and reliable system operation.
        </Paragraph>
        <Paragraph>
          We deliver all services related to the electrical system to proactively ensure system reliability, find the root cause and suggest corrective action.
        </Paragraph>

        <h3 className="mt-12 font-semibold max-md:mt-10">Engineering Services:</h3>
        <Paragraph>
          Our vast experience, innovative approach and ability to respond to customers' needs across diverse applications have helped build significant knowledge and expertise. Our diverse specializations ensure a multidimensional approach to problem solving, thereby positioning us as a competent and reliable full service vendor partner in the electrical engineering space.
        </Paragraph>
        
        <h4 className="mt-8 font-semibold">Seamlessly combining the best of:</h4>
        <ul className="list-none">
          {services.map((service, index) => (
            <ServiceItem key={index}>{service}</ServiceItem>
          ))}
        </ul>


        <h3 className="mt-8 font-semibold">Your Profile:</h3>
        <ul className="list-none">
          {Profile.map((Profile, index) => (
            <ServiceItem key={index}>{Profile}</ServiceItem>
          ))}
        </ul>


        <h3 className="mt-8 font-semibold"> Your Roles and Responsibilities:</h3>  
        <ul className="list-none">
          {Responsibility.map((Profile, index) => (
            <ServiceItem key={index}>{Profile}</ServiceItem>
          ))}
        </ul>

        <h2 className="text-2xl text-red-700 font-semibold mt-10">What we offer</h2>
        <ul className="list-none">
          {whatweoffer.map((Profile, index) => (
            <ServiceItem key={index}>{Profile}</ServiceItem>
          ))}
        </ul>

        <h2 className="text-2xl text-red-700 font-semibold mt-10">Your Reporting Line:</h2>
        <h2 className="text-xl text-red-700 font-light p-3 mt-8 border w-fit border-red-500">Manager- Technical Services</h2>

        <div className='flex mt-16 gap-8'>

            <div className='text-2xl text-red-700 font-semibold'>Share Job:</div>
            <div className='flex h-8 gap-5'>
              <img src="./CareerPage/FbLogo.png" alt="FbLogo" />
              <img src="./CareerPage/Xlogo.png" alt="Xlogo" />
              <img src="./CareerPage/LinkedInLogo.png" alt="LinkedInLogo" />
            </div>
        </div>

      </section>
      </div>
    </section>
  );
}
const SectionTitle = ({ children }) => (
    <h2 className="text-2xl text-red-700 font-semibold mt-14 max-md:mt-10">
      {children}
    </h2>
  );
  
  const Paragraph = ({ children }) => (
    <p className="self-stretch mt-8 leading-6 max-md:max-w-full">
      {children}
    </p>
  );
  
  const ServiceItem = ({ children }) => {
    // Transform children by wrapping text within |...| with a semibold span
    const processedChildren = typeof children === 'string'
      ? children.split(/(\|.*?\|)/g).map((part, index) =>
          part.startsWith('|') && part.endsWith('|') ? (
            <span key={index} className="font-semibold">
              {part.slice(1, -1)}
            </span>
          ) : (
            part
          )
        )
      : children;
  
    return (
      <li className="mt-6 pl-6 relative">
        <span className="absolute left-0 top-0 text-xl">•</span>
        {processedChildren}
      </li>
    );
  };
  
  

export default TSE_CareersPage