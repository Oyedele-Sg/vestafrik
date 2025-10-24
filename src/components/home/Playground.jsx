import React from 'react';
import { Link } from 'react-router-dom';
import play from '../../assets/images/play.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
const Playground = () => {
  return (
    <div className=" w-full mt-16">
      <div className=" flex items-center justify-center ">
        <div className="container">
          <div className=" lg:flex hidden ">
            <div style={{ width: '460px' }}>
              <h1 className=" build_text  text-font ">
                Built for diasporan investors of African descent
              </h1>
            </div>
            <p className="p_text text-font_sm w-2/3">
              Africa is the future and smart investors like you are positioning
              for that. VestAfrik leverages technology to bring you smart
              investment options and opportunities within your budget. Starting
              with small-and-medium size businesses, franchizes, technology
              startups and real estate portfolio, you have access well curated
              and vetted investment opportunities.
            </p>
          </div>
          <div className=" flex lg:hidden flex-col w-full items-center justify-center">
            <h1 className=" build_text  text-font ">
              Built for diasporan investors of African descent
            </h1>

            <p className="p_text text-font_sm pt-3">
              Africa is the future and smart investors like you are positioning
              for that. VestAfrik leverages technology to bring you smart
              investment options and opportunities within your budget. Starting
              with small-and-medium size businesses, franchizes, technology
              startups and real estate portfolio, you have access well curated
              and vetted investment opportunities.
            </p>
          </div>
          <div className="w-full mt-8">
            <img src={play} alt="" />
          </div>
          <div className="w-full  items-center justify-between hidden lg:flex my-8">
            <p style={{ width: '490px' }} className=" p_text text-font_sm">
              Moreover, Africa is our fatherland right? So we should have piece
              of the ownership of the actual land and businesses they make it
              thrive.
            </p>
            <Link to="/works">
              <button className="bg-pr button_padding rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800">
                HERE'S HOW IT WORKS <BsFillArrowRightCircleFill />
              </button>
            </Link>
          </div>
          <div className="w-full  items-center flex-col justify-center gap-2 flex lg:hidden my-8">
            <p className=" text-sm text-font_sm">
              Moreover, Nigeria is our fatherland right? So we should have piece
              of the ownership of the actual land.
            </p>
            <Link to="/works">
              <button className="bg-pr w-80 flex items-center justify-center button_padding rounded-md  gap-2 text-white text-sm hover:bg-green-800">
                HERE'S HOW IT WORKS <BsFillArrowRightCircleFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
