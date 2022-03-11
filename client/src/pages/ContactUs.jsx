import React from "react";
import { useLocation } from "react-router-dom";
const ContactUs = ({ setGetlocation }) => {
  const location = useLocation();
  React.useEffect(() => {
    setGetlocation(location.pathname);
  }, []);
  return (
    <>
      <div className=" w-full bg-Contact h-96 ">
        <div className="flex  w-full items-center justify-center">
          <div className="container ">
            <div className="flex items-center justify-center pt-8 lg:pt-16 flex-col">
              <h1 className=" text-3xl lg:text-5xl w-full text-center text-white font-bold">
                Contact our investment Team
              </h1>
              <p className=" text-sm text-white text-center w-full lg:w-1/3 pt-2">
                For help with your account or any other questions you have,
                visit our Help Center or use the form below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "-180px" }}
        className=" w-full flex items-center justify-center mb-32"
      >
        <div className=" w-full mx-3 lg:mx-0 lg:w-2/3 bg-white shadow-md p-8 lg:p-16">
          <h1 className=" font-bold text-2xl lg:text-4xl text-font w-full text-center">
            Send us a Message
          </h1>
          <form className=" w-full pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-3">
            <div className=" flex flex-col gap-2">
              <p className=" text-xs font-bold text-font">
                First Name <span className=" text-red-500">*</span>
              </p>
              <input type="text" className=" border px-4 h-10 bg-gray-100" />
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" text-xs font-bold text-font">
                Last Name <span className=" text-red-500">*</span>
              </p>
              <input type="text" className=" border px-4 h-10 bg-gray-100" />
            </div>
            <div className=" flex flex-col gap-2 lg:col-span-2">
              <p className=" text-xs font-bold text-font">Email Address </p>
              <input type="email" className=" border px-4 h-10 bg-gray-100" />
            </div>
            <div className=" flex flex-col gap-2 lg:col-span-2">
              <p className=" text-xs font-bold text-font">
                Add Message <span className=" text-red-500">*</span>
              </p>
              <textarea
                className=" border px-4 h-40 bg-gray-100"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className=" lg:col-span-2 flex items-center justify-center mt-4">
              <button className=" px-5 py-2 red_btn hover:bg-red-700 rounded-sm text-sm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
