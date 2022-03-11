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
                Built to level the Real Estate Playing Ground
              </h1>
            </div>
            <p className="p_text text-font_sm w-2/3">
              Gone are the days where only individuals and cooperations at the
              top of the income chain can invest in Real Estate. With VestAfrik,
              you have access to real estate investment opportunities within
              your budget. Real estate has been considered to be one of the most
              reliable and ever-appreciating asset class and now, it is
              available to you right on your device.
            </p>
          </div>
          <div className=" flex lg:hidden flex-col w-full items-center justify-center">
            <h1 className=" build_text  text-font ">
              Built to level the Real Estate Playing Ground
            </h1>

            <p className="p_text text-font_sm pt-3">
              Gone are the days where only individuals and cooperations at the
              top of the income chain can invest in Real Estate. With VestAfrik,
              you have access to real estate investment opportunities within
              your budget. Real estate has been considered to be one of the most
              reliable and ever-appreciating asset class and now, it is
              available to you right on your device.
            </p>
          </div>
          <div className="w-full mt-8">
            <img src={play} alt="" />
          </div>
          <div className="w-full  items-center justify-between hidden lg:flex my-8">
            <p style={{ width: '490px' }} className=" p_text text-font_sm">
              Moreover, Africa is our fatherland right? So we should have piece
              ofownership of the actual land.
            </p>
            <Link to="/works">
              <button className="bg-pr button_padding rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800">
                HERE'S HOW IT WORKS <BsFillArrowRightCircleFill />
              </button>
            </Link>
          </div>
          <div className="w-full  items-center flex-col justify-center gap-2 flex lg:hidden my-8">
            <p className=" text-sm text-font_sm">
              Moreover, Africa is our fatherland right? So we should have piece
              ofownership of the actual land.
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
