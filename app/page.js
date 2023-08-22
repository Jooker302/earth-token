"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import Loader from "@/components/Loader";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const aboutSection = document.getElementById("about-section");

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="relative bg-[#01BE62]">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img src="main.jpeg" alt="Logo" className="h-8 w-8 rounded-full" />
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#about-section" className="text-white">
              About
            </a>
            <a href="#team-section" className="text-white">
              Team
            </a>
          </nav>

          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-[#01BE62] md:hidden transition-all duration-300`}
        >
          <div className="p-4 space-y-2">
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#about-section" className="block text-white">
              About
            </a>
            <a href="#team-section" className="block text-white">
              Team
            </a>
            <a href="https://t.me/earthtoken98" className="block text-white">
              Telegram
            </a>
            <a
              href="https://twitter.com/TokenEarth91?t=Mt-HZMcPOIuSNsTdP0Un2Q&s=09"
              className="block text-white"
            >
              Twitter
            </a>
          </div>
        </nav>
      </div>

      <div id="intro" className="flex bg-gray-100 justify-between p-4 flex-wrap">
        <div className="md:w-1/2">
          <img className="md:w-96 md:h-96 md:ml-28" src="/main.jpeg" />
        </div>
        <div className="md:w-1/2 px-4 py-2">
          <h2 className="text-[#01BE62] md:text-5xl text-xl font-bold underline mt-4 md:mt-0">
            Earth Token
          </h2>
          <p className="p-4 md:pt-8 text-xl">
            Earth Token is a revolutionary crypto project aimed at promoting
            environmental sustainability and global conservation efforts. Built
            on a blockchain platform, Earth Token seeks to create a
            decentralized ecosystem where individuals and organizations can
            contribute to preserving the planet's natural resources. Through the
            innovative use of smart contracts, Earth Token empowers participants
            to support and fund initiatives related to renewable energy,
            reforestation, wildlife preservation, and more.
          </p>
          {/* <div className="flex justify-center my-3">
            <a href="#about" className="px-4 py-2 cursor-pointer bg-[#DE7596] text-white hover:bg-[#D1668A] rounded-lg">
              About Us
            </a>
          </div> */}
        </div>
      </div>

      <FeaturesSection />

      <section
        id="about-section"
        className={`bg-gray-100 py-12 px-4 md:px-0 ${
          isVisible ? "slide-in active" : "slide-in"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:px-4">
            <img
              src="/cover.jpeg"
              alt="About"
              className="w-full rounded-lg shadow-lg  md:w-full md:max-w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h2 className="text-2xl font-bold text-[#01BE62] mb-4">
              About Earth Token
            </h2>
            <p className="text-gray-600">
              {" "}
              Earth Token is a revolutionary crypto project aimed at promoting
            environmental sustainability and global conservation efforts. Built
            on a blockchain platform, Earth Token seeks to create a
            decentralized ecosystem where individuals and organizations can
            contribute to preserving the planet's natural resources. Through the
            innovative use of smart contracts, Earth Token empowers participants
            to support and fund initiatives related to renewable energy,
            reforestation, wildlife preservation, and more.
            </p>
          </div>
        </div>

        <div id="about" className="p-6 flex justify-center flex-wrap">
        <div className="bg-[#01BE62] rounded-lg flex justify-center flex-col items-center shadow-md m-2 p-4 md:w-2/5">
          <p className="text-3xl font-bold text-white">Fairlaunch on </p>
          <p className="p-1 italic font-bold text-white">
            Earth Token will Fairlaunch on 31st August
          </p>
        </div>
        <div className="bg-[#01BE62] rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold text-white">Listing Network </p>
          <p className="p-1 italic font-bold text-white">Earth Token is listed on Arbitrum Chain.</p>
          {/* <p>
            Arbitrum is a layer 2 scaling solution for Ethereum, designed to
            improve scalability and reduce transaction fees. It aims to enhance
            the Ethereum ecosystem by enabling faster and more cost-efficient
            smart contract execution
          </p> */}
        </div>
      </div>
      </section>

      
      <TeamSection />

      <footer className="bg-[#01BE62] py-4 text-center font-bold text-white">
        <p>Listed on Arbitrum Chain</p>
      </footer>
    </>
  );
}
