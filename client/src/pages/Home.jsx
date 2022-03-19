import React from 'react';
import GetStarted from '../components/home/GetStarted';
import Hero from '../components/home/Hero';
import Invest from '../components/home/Invest';
import Playground from '../components/home/Playground';

const Home = () => {
  return (
    <>
      <Hero />
      <Playground />
      <GetStarted />
      <Invest />
    </>
  );
};

export default Home;
