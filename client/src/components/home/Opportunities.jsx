import React, { useState } from 'react';
import { GoMail } from 'react-icons/go';
import api from '../../utils/api';
const Opportunities = () => {
  const [email, setEmail] = useState('');
  const emailSubscribe = async (e) => {
    e.preventDefault();
    const emailData = { email };
    try {
      const res = await api.post('/subscribe', emailData);
      const data = res.data;
      if (data.success) {
        alert(data.msg);
      }
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className=" w-full relative mt-16 lg:mt-0"
      style={{ marginBottom: '-70px', zIndex: '9999' }}
    >
      <div className="flex items-center justify-center">
        <div className="container h-full p-5 lg:p-0 lg:h-96 bg-white shadow-md  overflow-hidden rounded-bl-3xl rounded-br-3xl">
          <div className="bg_oportunites w-full h-full">
            <div className=" flex items-center w-full pt-2 lg:pt-16 justify-center">
              <h1 className="  text-font o_text text-center">
                Get the latest Opportinites
              </h1>
            </div>
            <div className="flex items-center justify-center mt-0 lg:mt-3">
              <p className="  text-font_sm hidden lg:block p_text w-2/3 text-center">
                Get to know about new investment opportunities first. Remember,
                the best time to invest is yesterday and the next best time is
                today.
              </p>
              <p className="  text-font_sm py-3 block lg:hidden p_text text-center">
                Get to know about new investment opportunities first.
              </p>
            </div>
            <div className=" w-full flex items-center justify-center">
              <div className=" hidden w-1/3 lg:flex items-center justify-between my-8">
                <p className=" w-96 text-sm text-gray-400 flex items-center gap-1">
                  <GoMail className=" w-5 h-5" />
                  <input
                    type="text"
                    className="px-2 py-1"
                    style={{ width: '270px' }}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <button
                  className="bg-pr font-bold px-4 py-2 rounded-md flex items-center gap-2 text-white text-sm hover:bg-green-800"
                  onClick={emailSubscribe}
                >
                  Subscribe
                </button>
              </div>
              <div className=" lg:hidden pt-3 w-full flex items-center justify-center gap-3 flex-col">
                <p className=" text-sm w-full justify-center text-gray-400 flex items-center gap-1">
                  <GoMail className=" w-6 h-6" />
                  <input
                    type="text"
                    className=" text-lg w-96"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <button
                  className="bg-pr w-full font-bold px-4 py-4 rounded-md flex items-center justify-center gap-2 text-white text-sm hover:bg-green-800"
                  onClick={emailSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
