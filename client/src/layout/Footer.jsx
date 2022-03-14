import React from 'react';
import footerbg from '../assets/images/footerBg.png';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import vest from '../assets/images/vest.png';
const Footer = () => {
  return (
    <>
      <div className="bg-tr w-full px-3 relative pt-16 pb-8">
        <div className="flex items-center py-3 justify-center w-full h-full ">
          <div className="container">
            <div className="w-full grid grid-cols-1 items-center lg:grid-cols-2 gap-5">
              <div className="flex items-start flex-col pt-6">
                <div className=" h-16 w-52">
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    src={footerbg}
                    alt=""
                  />
                </div>
                <p className=" text-white n_text w-96 font-thin">
                  VestAfrik Realty Solutions, LLC ("VestAfrik") operates a
                  website at vestafrik.com and certain mobile apps (the
                  "Platform"'). By using the Platform, you accept our Terms of
                  Service and Privacy Policy. Past performance is no guarantee
                  of future results. Any historical returns, expected returns,
                  or probability projections may not reflect actual future
                  performance.
                </p>
              </div>
              <div className="flex lg:hidden items-center justify-center text-white gap-4">
                <a href="#">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="w-6 h-6" />
                </a>
                <a href="#">
                  <AiFillYoutube className="w-6 h-6" />
                </a>
              </div>
              <div className=" hidden lg:grid grid-cols-3 gap-5 pt-6">
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white n_text font-bold pb-3">Product</h4>
                  <a href="#" className=" text-gray-300 n_text">
                    How it works
                  </a>
                  <a href="#" className=" text-gray-300 n_text">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 n_text">
                    Real Estate
                  </a>
                </div>
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white font-bold pb-3">Company</h4>
                  <a href="#" className=" text-gray-300 n_text">
                    About Us
                  </a>
                  <a href="#" className=" text-gray-300 n_text">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 n_text">
                    Careers
                  </a>
                </div>
                <div className="flex items-start gap-1 flex-col">
                  <h4 className="text-white font-bold pb-3">Resources</h4>
                  <a href="#" className=" text-gray-300 n_text">
                    Help Center
                  </a>
                  <a href="#" className=" text-gray-300 n_text">
                    Articles
                  </a>
                </div>
              </div>
              <div className="  flex lg:hidden items-center justify-center gap-6 divide-x-2 divide-white flex-wrap">
                <div className="flex items-start gap-3 flex-col">
                  <h4 className="text-white font-bold pb-3">Product</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    How it works
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Real Estate
                  </a>
                </div>
                <div className="flex pl-7 items-start gap-3 flex-col">
                  <h4 className="text-white font-bold pb-3">Company</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    About Us
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Our Process
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Careers
                  </a>
                </div>
              </div>
              <div className="flex lg:hidden pt-3 w-full items-center justify-center">
                <div className="flex items-start gap-3 flex-col">
                  <h4 className="text-white font-bold pb-3">Resources</h4>
                  <a href="#" className=" text-gray-300 text-xs">
                    Help Center
                  </a>
                  <a href="#" className=" text-gray-300 text-xs">
                    Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute w-96 pt-5 h-80 bottom-0 lg:top-0 left-0 z-50">
          <img src={vest} alt="" />
        </div>
      </div>
      <div
        className=" w-full h-12 hidden lg:flex items-center justify-center"
        style={{ background: '#001500' }}
      >
        <div className="container">
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <p>© 2022 VestAfrik. All rights reserved</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/vestafrik/">
                <FiInstagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/vestafrik/">
                <AiOutlineTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCeZtgzPxa599nAfRyiXvjxQ">
                <AiFillYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
