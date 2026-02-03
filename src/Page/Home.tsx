import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GetReadyToWork from '../component/GetReadyToWork';
import OurLearningModel from '../component/OurLearningModel';
import WhatDoWeOffer from '../component/WhatDoWeOffer';
import LearnerTeastimonials from '../component/LearnerTestimonials';
import ContactUs from '../component/ContactUs';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <GetReadyToWork />
      <OurLearningModel />
      <WhatDoWeOffer />
      <LearnerTeastimonials />
      <ContactUs />
    </>
  );
};

export default Home;

