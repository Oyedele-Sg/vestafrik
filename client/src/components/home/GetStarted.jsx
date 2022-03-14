import React from 'react';
import create from '../../assets/images/create.png';
import add from '../../assets/images/add-content.png';
import lounch from '../../assets/images/launch.png';

const GetStarted = () => {
  return (
    <div className=" w-full bg_getStarted mt-0 py-12 lg:py-0 lg:mt-28">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className=" font-bold text-black h1_text w-full text-center">
            How To Get Started
          </h1>
          <div className="flex items-center justify-center mt-3">
            <p className="  text-font_sm p_text  w-96 text-center">
              Our goal is to get to know you and help you get started with your
              investment as fast as possible.
            </p>
          </div>
          <div className=" hidden lg:grid grid-cols-3 gap-24 mt-8 ">
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={create} alt="" />
              </div>
              <h3 className=" text-font started_p_text w-full text-center">
                Tell Us about yourself
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={add} alt="" />
              </div>
              <h3 className=" text-font started_p_text w-full text-center">
                Find an investment opportunity
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-28">
                <img src={lounch} alt="" />
              </div>
              <h3 className=" text-font started_p_text w-full text-center">
                Grow your portdolio
              </h3>
            </div>
          </div>
          <div className=" grid lg:hidden grid-cols-3 gap-5 mt-8">
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={create} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Tell Us about yourself
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={add} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Find an investment opportunity
              </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <div className=" h-20">
                <img src={lounch} alt="" />
              </div>
              <h3 className=" text-font text-sm font-bold w-full text-center">
                Grow your portdolio
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
