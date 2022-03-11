import React from 'react'
import GetStarted from '../components/home/GetStarted'
import Hero from '../components/home/Hero'
import Invest from '../components/home/Invest'
import Playground from '../components/home/Playground'
import { useLocation } from "react-router-dom";
const Home = ({setGetlocation}) => {
  const location = useLocation();
  React.useEffect(() => {
    setGetlocation(location.pathname);
  }, []);
  return (
    <>
        <Hero/>
        <Playground/>
        <GetStarted/>
        <Invest/>
        
    </>
  )
}

export default Home