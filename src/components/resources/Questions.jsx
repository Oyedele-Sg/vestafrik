import React from 'react';
import { FiSearch } from 'react-icons/fi';
import cover from '../../assets/images/Cover.png';
import cover1 from '../../assets/images/cover1.png';
import cover2 from '../../assets/images/cover2.png';
import cover3 from '../../assets/images/cover3.png';
import cover4 from '../../assets/images/cover4.png';

const Questions = () => {
  return (
    <div className=" w-full">
      <div className="flex items-center justify-center">
        <div className="container">
          <div className=" w-full h-full">
            <div className=" flex items-center w-full pt-16 justify-center">
              <h1 className=" font-bold text-font text-3xl lg:text-5xl text-center">
                You’ve got questions?
              </h1>
            </div>
            <div className="flex items-center justify-center mt-3">
              <p className=" font-bold text-font_sm text-sm w-full lg:w-2/3 text-center">
                Lorem ipsum is common placeholder text used to demonstrate the
                graphic elements of a document or visual presentation. Lorem
                ipsum is common placeholder text used to demonstrate the graphic
                elements of a document or visual presentation.
              </p>
            </div>
            <div className=" w-full hidden lg:flex items-center justify-center  my-12">
              <div
                style={{ background: '#F5F5F5' }}
                className=" grid w-full grid-cols-4"
              >
                <p className=" w-full  text-sm text-gray-400 flex items-center col-span-3 gap-1">
                  <div className="flex items-center justify-center w-16 h-16 ">
                    <FiSearch className=" w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    className=" w-full h-full px-3"
                    style={{ background: '#F5F5F5' }}
                    placeholder="Search the help center"
                  />
                </p>
                <button className="bg-pr font-bold px-4 py-2 rounded-md flex items-center justify-center gap-2 text-white text-sm hover:bg-green-800">
                  Search
                </button>
              </div>
            </div>
            <div className=" w-full flex lg:hidden flex-col items-center justify-center  my-12">
              <div
                style={{ background: '#F5F5F5' }}
                className=" grid w-full grid-cols-1 gap-2"
              >
                <p className=" w-full  text-sm text-gray-400 flex items-center col-span-3 gap-1">
                  <div className="flex items-center justify-center w-16 h-16 ">
                    <FiSearch className=" w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    className=" w-full h-full px-3"
                    style={{ background: '#F5F5F5' }}
                    placeholder="Search the help center"
                  />
                </p>
                <button className="bg-pr font-bold w-full px-4 py-4 rounded-md flex items-center justify-center gap-2 text-white text-sm hover:bg-green-800">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className=" my-32 w-full">
            <h1 className="text-2xl text-font font-bold">
              Get answers to all your Questions
            </h1>
            <div className="grid grid-cols-1 pt-16 lg:grid-cols-3 gap-10">
              <div className="flex items-start gap-2 flex-col">
                <img src={cover} alt="" />
                <h5 className="text-font text-lg pt-2 font-bold">
                  About VestAfrik
                </h5>
                <p className="text-sm text-font_sm">
                  What we do, how we're different, and how you can contact us...
                </p>
                <button className="px-3 text-sm hover:bg-red-700 py-2 rounded-sm red_btn">
                  Read More
                </button>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <img src={cover1} alt="" />
                <h5 className="text-font text-lg pt-2 font-bold">
                  Getting Started
                </h5>
                <p className="text-sm text-font_sm">
                  Learn more about investing on VestAfrik and what to expect....
                </p>
                <button className="px-3 text-sm hover:bg-red-700 py-2 rounded-sm bg-pr text-white">
                  Read More
                </button>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <img src={cover2} alt="" />
                <h5 className="text-font text-lg pt-2 font-bold">
                  Account Management
                </h5>
                <p className="text-sm text-font_sm">
                  Here's what you need to know about navigating your
                  dashboard....
                </p>
                <button className="px-3 text-sm hover:bg-red-700 py-2 rounded-sm bg-yellow-600 text-white">
                  Read More
                </button>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <img src={cover3} alt="" />
                <h5 className="text-font text-lg pt-2 font-bold">Our Assets</h5>
                <p className="text-sm text-font_sm">
                  Get to know the quality assets and investments that make up
                  VestAAfrik portfolio
                </p>
                <button className="px-3 text-sm hover:bg-red-700 py-2 rounded-sm red_btn">
                  Read More
                </button>
              </div>
              <div className="flex items-start gap-2 flex-col">
                <img src={cover4} alt="" />
                <h5 className="text-font text-lg pt-2 font-bold">Selling</h5>
                <p className="text-sm text-font_sm">
                  Find answers on how you can have your property listed on our
                  marketplace for sale
                </p>
                <button className="px-3 text-sm hover:bg-red-700 py-2 rounded-sm bg-pr text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
