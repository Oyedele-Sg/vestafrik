import React, { useEffect } from 'react';
import Questions from '../components/resources/Questions';
import { useLocation } from 'react-router-dom';

const Resources = ({ setGetlocation }) => {
  const location = useLocation();
  useEffect(() => {
    setGetlocation(location.pathname);
  }, []);
  return (
    <div className=" w-full min-h-full bg-white">
      <Questions />
    </div>
  );
};

export default Resources;
