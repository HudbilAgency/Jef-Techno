import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MainFooter from '../Components/Footer/MainFooter';

export default function LeadershipTeam() {
  const [searchTerm, setSearchTerm] = useState('');

  const leaders = [
    {
      id: 1,
      name: "Nadhmi Al-Nasr",
      title: "Chief Executive Officer",
      image: "./LeadershipTeamImg/Nadhmi-Al-Nasr-3.png",
      variant: "red"
    },
    {
      id: 2,
      name: "Rayan Fayez",
      title: "Deputy CEO",
      image: "./LeadershipTeamImg/Rayan-Mohammed-Fayez.png",
      variant: "red"
    },
    {
      id: 3,
      name: "Jassir Al-Jassir",
      title: "Chief Governance, Risk and Compliance Officer",
      image: "./LeadershipTeamImg/jassir-al-jassir.png", 
      variant: "red"
    },
    {
      id: 4,
      name: "Dr Manar Al Moneef",
      title: "Chief Investment Officer",
      image: "./LeadershipTeamImg/Almoneef.png",
      variant: "red"
    },
    {
      id: 5,
      name: "Dr Mahmoud Alyamani",
      title: "Health and Well-Being Sector Head",
      image: "./LeadershipTeamImg/mahmoud-alyamani-v3.png",
      variant: "red"
    },
    {
      id: 6,
      name: "Nader Ashoor",
      title: "Chief Financial Officer", 
      image: "./LeadershipTeamImg/nader-ashoor.png",
      variant: "red"
    },
    {
      id: 7,
      name: "Joseph Bradley",
      title: "TONOMUS CEO",
      image: "./LeadershipTeamImg/Bradley.png",
      variant: "red"
    },
    {
      id: 8,
      name: "Dr Richard Bush",
      title: "Chief Environment Officer",
      image: "./LeadershipTeamImg/Richard-Bush.png",
      variant: "red"
    },
    {
      id: 9,
      name: "Niall Gibbons",
      title: "Head of Tourism",
      image: "./LeadershipTeamImg/Niall-Gibbons.png",
      variant: "red"
    },
    {
      id: 10,
      name: "Denis Hickey",
      title: "Chief Development Officer, THE LINE",
      image: "./LeadershipTeamImg/Hickey.png",
      variant: "red"
    },
    {
      id: 11,
      name: "Michael Lynch",
      title: "Entertainment & Culture Sector Head",
      image: "./LeadershipTeamImg/michael-lynch-bnw.png",
      variant: "red"
    },
    {
      id: 12,
      name: "Dr Paul Marshall",
      title: "Head of Nature Region",
      image: "./LeadershipTeamImg/Paul-Marshall_AYF03551.png",
      variant: "red"
    },
    {
      id: 13,
      name: "Majid Mufti",
      title: "JEF Investment Fund CEO",
      image: "./LeadershipTeamImg/Majid-Mufti.png",
      variant: "red"
    },
    {
      id: 14,
      name: "Jan Paterson",
      title: "Head of Sport",
      image: "./LeadershipTeamImg/Paterson.png",
      variant: "red"
    },
    {
      id: 15,
      name: "Roberto Penno",
      title: "Chief Projects Officer",
      image: "./LeadershipTeamImg/roberto-penno-v2.png",
      variant: "red"
    },
    {
      id: 16,
      name: "Stefan Ricketts",
      title: "Chief Legal Officer",
      image: "./LeadershipTeamImg/stefan-ricketts-v2.png",
      variant: "red"
    },
    {
      id: 17,
      name: "Peter Terium",
      title: "ENOWA CEO",
      image: "./LeadershipTeamImg/Terium.png",
      variant: "red"
    },
    {
      id: 18,
      name: "Vishal Wanchoo",
      title: "OXAGON CEO",
      image: "./LeadershipTeamImg/Vishal-Wanchoo_AYF02431-1.png",
      variant: "red"
    }
  ];

  const filteredLeaders = leaders.filter(leader => 
    leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leader.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        < Navbar />
        <main className="flex flex-col min-h-screen bg-neutral-100">
            <header className="relative h-screen overflow-hidden">
                <img 
                src="./LeadershipTeamImg/JEF Leadership image.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
                <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-wider mb-4">
                    JEF LEADERSHIP TEAM
                </h1>
                <p className="text-white text-sm lg:text-base font-light leading-relaxed max-w-3xl">
                    The world's biggest project needs some of the world's most talented people. That's why the JEF leadership team consists of innovators and visionaries who do things differently.
                </p>
                </div>
            </header>

            <nav className="bg-zinc-800 py-4" aria-label="Breadcrumb">
                <div className="container mx-auto px-4">
                <div className="flex items-center space-x-2 text-xs lg:text-sm">
                    <a href="/" className="text-red-700 uppercase hover:underline">HOME</a>
                    <span className="text-red-700">/</span>
                    <a href="/AboutUs" className="text-red-700 uppercase hover:underline">ABOUT US</a>
                    <span className="text-red-700">/</span>
                    <span className="text-neutral-300 uppercase">JEF LEADERSHIP TEAM</span>
                </div>
                </div>
            </nav>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-sm mb-16">
                <div className="relative">
                    <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded text-zinc-900 placeholder-zinc-900"
                    aria-label="Search leaders"
                    />
                    <svg
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredLeaders.map((leader) => (
                    <article key={leader.id} className="flex flex-col">
                    <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full aspect-square object-cover"
                    />
                    <h2 className="mt-6 text-xl text-zinc-900 font-medium">
                        {leader.name}
                    </h2>
                    <p className={`mt-4 text-sm ${
                        leader.variant === 'red' ? 'text-red-700' : 'text-yellow-600'
                    }`}>
                        {leader.title}
                    </p>
                    <button
                        className="mt-8 w-6 h-6"
                        aria-label={`View ${leader.name}'s profile`}
                    >
                        {/* <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-full h-full"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                        </svg> */}
                        <img src="./LeadershipTeamImg/Arrow.png" alt="Arrow" />
                    </button>
                    </article>
                ))}
                </div>
            </section>
            </main>
        < MainFooter />    
    </>
  );
}