import React from 'react';
import circle from '../../assets/images/Circle BG.png';
import hero from '../../assets/images/how.png';
const Hero = () => {
  return (
    <div className="w-full flex mt-8 items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-32  items-center">
          <div className="w-full flex items-center justify-center">
            <div className=" h-full relative hidden w-2/3 lg:px-16 lg:flex items-start justify-center flex-col gap-3 ">
              <h1 className="h1_text font-bold text-center text-black">
                Quality assets. Low fees. Smart technology.
              </h1>
              <div className="flex items-center justify-center w-full">
                <p className=" text-font_sm n_text text-center w-2/3 pt-3">
                  We blend our investment expertise with smart technology to
                  provide our investors with the buying power and investment
                  opportunities traditionally reserved for billion dollar
                  institutions.
                </p>
              </div>
            </div>
            <div className=" h-full relative flex w-full lg:px-16 lg:hidden items-start justify-start flex-col gap-3 ">
              <h1 className="text-3xl font-bold text-center text-font">
                Quality assets. Low fees. Smart technology.
              </h1>
              <div className="flex items-center justify-center w-full">
                <p className=" text-font_sm text-sm text-center w-full pt-3">
                  We blend our investment expertise with smart technology to
                  provide our investors with the buying power and investment
                  opportunities traditionally reserved for billion dollar
                  institutions.
                </p>
              </div>
            </div>
          </div>
          {/* desktop */}
          <div className=" relative hidden lg:block">
            <img src={circle} alt="" />
            <div style={{ top: '-120px' }} className=" absolute left-60 z-20">
              <img src={hero} alt="" />
            </div>
          </div>
          {/* mobile */}
          <div className=" relative block lg:hidden w-full h-40">
            <img
              src={circle}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt=""
            />
            <div
              style={{ top: '-43px', left: '80px' }}
              className=" absolute z-20"
            >
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
