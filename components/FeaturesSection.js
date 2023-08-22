import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram } from '@fortawesome/free-brands-svg-icons';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const featuresSectionTop = featuresRef.current.getBoundingClientRect().top;

    if (scrollY > featuresSectionTop + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // Set back to false when scrolling up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={featuresRef}
      className={`bg-gray-100 py-12 pt-3 px-4 ${isVisible ? 'slide-up active' : 'slide-up'}`}
    >
      <section
        id="join-us-section"
        className={`bg-gray-100 py-12 text-center`}
      >
        <h2 className="text-3xl font-semibold mb-4 fire text-[#01BE62]">Join Us</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src="main.jpeg"
            alt="Join Us"
            className="h-32 w-32 md:h-64 md:w-64 rounded-full"
          />
          <div className="mt-2 text-sm max-w-md mx-auto px-4">
          Are you passionate about environmental sustainability? Join the Earth Token community and be a driving force in funding renewable energy, reforestation, and wildlife preservation initiatives. Together, we're leveraging blockchain to create a decentralized ecosystem that empowers individuals and organizations to protect our planet's future. Your participation counts – unite with us for a greener, more sustainable world.
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a
            className="m-2"
            href="https://twitter.com/TokenEarth91?t=Mt-HZMcPOIuSNsTdP0Un2Q&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="w-8 h-8 text-black hover:text-[#01BE62]"
            />
          </a>
          <a className="m-2" href="https://t.me/earthtoken98">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="w-8 h-8 text-black hover:text-[#01BE62]"
            />
          </a>
        </div>
      </section>
    </section>
  );
};

export default FeaturesSection;
