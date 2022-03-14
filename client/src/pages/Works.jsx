import React, { useEffect } from 'react';
import Invest from '../components/works/Invest';
import Hero from '../components/works/Hero';
import Note from '../components/works/Note';
import { useLocation } from 'react-router-dom';

const Works = ({ setGetlocation }) => {
  const location = useLocation();
  useEffect(() => {
    setGetlocation(location.pathname);
  }, []);

  return (
    <>
      <Hero />
      <Invest />
      <Note />
    </>
  );
};

export default Works;
