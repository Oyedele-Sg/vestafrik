import React, { useEffect } from 'react';
import ship from '../assets/images/ship.png';
import dot from '../assets/images/dot.png';
import photo from '../assets/images/Photo.png';
import bg from '../assets/images/BG.png';
import { useLocation } from 'react-router-dom';

const OurProcess = ({ setGetlocation }) => {
  const location = useLocation();
  useEffect(() => {
    setGetlocation(location.pathname);
  }, []);

  return (
    <div>
      <div
        style={{ background: '#E8F0F3' }}
        className="  grid grid-cols-1 pt-5 lg:pt-0 lg:grid-cols-3 gap-5"
      >
        <div className=" flex items-center col-span-2 ">
          <h1 className=" h1_text font-bold text-black pl-12">
            We believe transparency will be the most-disruptive innovation in
            our business
          </h1>
        </div>

        <div>
          <img src={ship} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full  bg-white">
        <div className="container ">
          <div className=" my-16">
            <div className=" w-full flex items-center flex-col justify-center">
              <h1 className=" build_text  text-font">This is how we work</h1>
              <p className=" w-2/3 text-center p_text text-font_sm pt-2">
                Innovation, Partnerships, Integrity, Entrepreneurship, Teamwork
                are what drives us.{' '}
              </p>
            </div>
            <div className=" w-full mt-12 grid bg-white grid-cols-1 lg:grid-cols-3 gap-12 bg_grid relative">
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold n_text relative z-50">
                  Account Creation
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  As an investor, you'll be required to create an account with
                  VestAfrik to be eligible to buy/invest in properties on our
                  marketplace. This process includes registration with basic
                  biometric information and national identification.
                </p>
                <div
                  style={{ top: '-15px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-yellow-300">1</h1>
                </div>
              </div>
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold relative n_text z-50">
                  Account Verification
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  To ensure validity, a KYC verification is conducted on every
                  new account. During this process, additional information such
                  as BVN maybe required. An investor would not be able to make
                  any investment with an unverified account.
                </p>
                <div
                  style={{ top: '-25px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-green-500">2</h1>
                </div>
              </div>
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold n_text relative z-50">
                  Making An Offer
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  Depending on the investment type, you might be able to make an
                  offer which could be accepted, countered, or denied. For other
                  investment types, you are able to choose either paying in full
                  or going with an agreed payment plan.
                </p>
                <div
                  style={{ top: '-20px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-pink-300">3</h1>
                </div>
              </div>
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold relative n_text z-50">
                  Payment
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  Once your offer has been accepted or you're ready to make a
                  full payment or agreed to a short-term time-to-own payment
                  conditions, you are able to choose any of our instant payment
                  methods to purchase your investment.
                </p>
                <div
                  style={{ top: '-20px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-green-300">4</h1>
                </div>
              </div>
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font n_text font-bold relative z-50">
                  Legal & Documents
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  Once the payments have been made, all legal documents,
                  receipts, copies of contract and agreement, and other bindings
                  that makes you a legal and authoritative owner of the
                  investment would be remitted to the investor's portal.
                </p>
                <div
                  style={{ top: '-20px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-yellow-300">5</h1>
                </div>
              </div>
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold n_text relative z-50">
                  Closing
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  At the closing of the investment transaction when other steps
                  such as land surveying, physical signing of documents,and more
                  have been completed, hardcopies of your legal rights to the
                  investment would be given to you.
                </p>
                <div
                  style={{ top: '-20px' }}
                  className=" absolute z-40 left-40"
                >
                  <h1 className="text-6xl font-bold text-pink-300">6</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-20 h-96">
                <img src={dot} alt="" />
              </div>
            </div>
          </div>
          <div className="mb-16 mt-32">
            <div
              className=" grid grid-cols-1 lg:grid-cols-3 gap-3 overflow-hidden pt-4 lg:pt-0"
              style={{ background: '#FFCE00' }}
            >
              <div className=" col-span-2 pl-10 flex items-start flex-col justify-center">
                <h1 className="text-font font-bold build_text w-3/4">
                  There is no better time to start investing in real estate and
                  no better place to invest
                </h1>
                {/* <button
                  className="button_padding2 font-medium text-sm bg-white mt-3"
                  style={{ color: '#FFCE00' }}
                >
                  Get Started
                </button> */}
              </div>
              <div className=" relative">
                <img src={photo} alt="" />
                <div
                  className=" absolute z-30"
                  style={{ bottom: '0', left: '-70px' }}
                >
                  <img src={bg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
