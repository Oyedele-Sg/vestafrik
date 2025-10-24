import React from 'react';

import inv1 from '../../assets/images/img1.png';
import inv2 from '../../assets/images/img2.png';
import inv3 from '../../assets/images/img3.png';

const Invest = () => {
  return (
    <div className=" w-full mt-16">
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-4 items-center my-8">
            {/* fist row */}
            <div>
              <img src={inv1} alt="" />
            </div>
            <div className="flex items-start flex-col">
              <div
                className="flex items-center gap-1 n_text font-medium"
                style={{ color: '#B42D2A' }}
              >
                OUR ASSETS
              </div>
              <h4 className="i_text font-bold text-font pt-2">
                Build a portfolio of only quality assets.
              </h4>
              <p className=" p_text text-font_sm  w-96 text-start pt-2">
                Our assets are all high income yielding. We conduct our due
                diligence to ensure the validity of all our assets. All legal
                documents binding the property are checked for authenticity by
                our legal team. We also conduct physical inspection of the
                property, market valuation and comp, check for restrictions or
                disputes, and all other process to make sure you only invest in
                quality assets.
              </p>
            </div>
            {/* second row */}
            <div className="flex items-start lg:pl-32 justify-center flex-col">
              <div
                className="flex items-center gap-1  n_text "
                style={{ color: '#B42D2A' }}
              >
                OUR MODEL
              </div>
              <h4 className="i_text  text-font pt-2">
                Earn more, spending less
              </h4>
              <p className="  text-font_sm p_text  w-96 text-start pt-2">
                VestAfrik is designed for every investors of all income levels,
                experiences, and backgrounds. We have leveraged technology to
                create an access With VestAfrik, we create an access to a
                community of investors with a common goal of owning and
                investing in real estate. Wether you are trying to sell, buy,
                collaborate with other investors, sponsors, and developers to
                build in a safe, and secured space, you are in the right space.
              </p>
            </div>
            <div>
              <img src={inv2} alt="" />
            </div>
            {/* third row */}
            <div>
              <img src={inv3} alt="" />
            </div>
            <div className="flex items-start flex-col">
              <div
                className="flex items-center gap-1  n_text"
                style={{ color: '#B42D2A' }}
              >
                OUR PLATFORM
              </div>
              <h4 className="i_text text-font pt-2">
                Start investing with a single click.
              </h4>
              <p className="  text-font_sm p_text  w-96 text-start pt-2">
                Once you create an account and get approved, you have access to
                a plethora of investment opportunities. Simply filter investment
                opportunity based on your desire and preferences such as
                locations, price range, property type and many more.
                {/* After
                finding the right opportunity, you can either make an offer or
                invite friends ir join our community of investors and fund your
                investment. */}
                With a signle click, you can sit back and watch your portfolio
                grow as you get all legal documents and updates on your
                investment yield in your investor's portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
