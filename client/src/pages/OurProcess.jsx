import React from 'react';
import ship from '../assets/images/ship.png';
import dot from '../assets/images/dot.png';
import photo from '../assets/images/Photo.png';
import bg from '../assets/images/BG.png';
import { useLocation } from 'react-router-dom';
const OurProcess = ({ setGetlocation }) => {
  const location = useLocation();
  React.useEffect(() => {
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
                Lorem ipsum is common placeholder text used to demonstrate the
                graphic elements of a document or visual presentation.{' '}
              </p>
            </div>
            <div className=" w-full mt-12 grid bg-white grid-cols-1 lg:grid-cols-3 gap-12 bg_grid relative">
              <div className=" relative z-50 flex flex-col gap-1 items-center justify-center">
                <h6 className="text-font font-bold n_text relative z-50">
                  Account Creation
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  The buyer is required to create an account with VestAfrik to
                  be eligible to buy properties on the marketplace. This process
                  includes registration with basic user information such as
                  Fullname, Email, Password, Date of Birth, Profile Picture, and
                  Address.
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
                  To ensure validity, users will be required to submit documents
                  for KYC verification purposes. This may include government ID,
                  proof of residency/address, and many more. During this
                  process, the seller will also be required to add his/her
                  banking information to receive payment for any sales made.
                  Once the account is verified, the user is then allowed to post
                  properties for sale.
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
                  When the buyer finds a property of interest, the buyer is able
                  to make an offer on the property. The buyer will state the
                  maximum offer price. The buyer then waits for the offer to be
                  approved, denied, or countered.
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
                  Agreement
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  If the buyer’s offer is accepted, the buyer enters into a
                  contract of agreement that binds the buyer to purchasing the
                  property. Part of this would require the buyer to pay an
                  agreed down-payment which will be x% of the property cost.
                  This agreement would also include a sales statement, terms and
                  conditions regarding how long the buyer has to make full
                  payment, legal documents to be provided, fees, and many more.
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
                  Payment & Issuance of Document
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  Once the buyer reviews and agrees to the document, the buyer
                  funds his/her VestAfrik wallet and makes the required payments
                  at the required times. Once the payments have been made, all
                  legal documents, receipts, copies of contract and agreement,
                  and other bindings would be remitted to the buyer. These
                  documents make the buyer the legal and authoritative owner of
                  the property.
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
                  Close
                </h6>
                <p className="text-sm text-font_sm pt-1 w-full text-center">
                  At the closing of the property, the buyer can either opt to
                  keep the property in his/her VestAfrik portfolio for the
                  purpose of flipping or resale in the future or have the
                  property completely taken out of the VestAfrik’s platform. If
                  the buyer wants to resell the property at a later time, the
                  buyer would have to go through all the seller’s processes.
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
                <button
                  className="button_padding2 font-medium text-sm bg-white mt-3"
                  style={{ color: '#FFCE00' }}
                >
                  Get Started
                </button>
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
