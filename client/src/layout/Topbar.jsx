import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
const Topbar = () => {
  const [active, setActive] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* desktop */}
      <div className=" h-20 hidden lg:block w-full border-b">
        <div className=" w-full h-full flex items-center justify-center">
          <div className="container h-full">
            <div className="flex items-center w-full h-full justify-between">
              <div className="flex items-center justify-center gap-16">
                <div className=" h-8">
                  <img src={logo} alt="" />
                </div>
                <div className="flex items-center justify-center gap-5">
                  <Link
                    onClick={() => setActive(1)}
                    to="/"
                    className={
                      active === 1
                        ? ' text-font font-bold text-sm'
                        : ' text-font font-medium text-sm'
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/works"
                    onClick={() => setActive(2)}
                    className={
                      active === 2
                        ? ' text-font font-bold text-sm'
                        : ' text-font font-medium text-sm'
                    }
                  >
                    How it Works
                  </Link>
                  <Link
                    to="/process"
                    onClick={() => setActive(3)}
                    className={
                      active === 3
                        ? ' text-font font-bold text-sm'
                        : ' text-font font-medium text-sm'
                    }
                  >
                    Our Process
                  </Link>
                  <Link
                    to="/resources"
                    onClick={() => setActive(4)}
                    className={
                      active === 4
                        ? ' text-font font-bold text-sm'
                        : ' text-font font-medium text-sm'
                    }
                  >
                    Resources
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setActive(5)}
                    className={
                      active === 5
                        ? ' text-font font-bold text-sm'
                        : ' text-font font-medium text-sm'
                    }
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center justify-center gap-4">
                <div className="px-9 cursor-pointer hover:bg-pr hover:text-white py-3 rounded-md flex items-center justify-center btn_bg font-semibold text-sm text-pr">
                  Login
                </div>
                <div className="px-9 cursor-pointer bg-pr hover:bg-green-800 text-white py-3 rounded-md flex items-center justify-center font-semibold text-sm ">
                  Sign Up
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className=" flex items-end justify-end flex-col lg:hidden w-full border-b p-3"
        style={{ background: '#1D704C' }}
      >
        <div className=" w-full flex items-center justify-between pb-2">
          <div className=" h-8 w-16">
            <img
              src={logo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              alt=""
            />
          </div>
          {!open ? (
            <RiBarChartHorizontalFill
              onClick={() => setOpen(true)}
              className=" w-7 h-7 text-white cursor-pointer"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setOpen(false)}
              className=" w-7 h-7 text-white cursor-pointer"
            />
          )}
        </div>
        {open && (
          <div className=" w-full h-full flex items-center flex-wrap justify-center">
            <div className="container h-full">
              <div className=" grid grid-cols-1 gap-y-2 pl-3 items-center w-full mt-4">
                <Link
                  onClick={() => {
                    setActive(1);
                    setOpen(false);
                  }}
                  to="/"
                  className={
                    active === 1
                      ? ' text-white font-bold text-sm'
                      : ' text-white font-medium text-sm'
                  }
                >
                  Home
                </Link>
                <Link
                  to="/works"
                  onClick={() => {
                    setActive(2);
                    setOpen(false);
                  }}
                  className={
                    active === 2
                      ? ' text-white font-bold text-sm'
                      : ' text-white font-medium text-sm'
                  }
                >
                  How it Works
                </Link>
                <Link
                  to="/process"
                  onClick={() => {
                    setActive(3);
                    setOpen(false);
                  }}
                  className={
                    active === 3
                      ? ' text-white font-bold text-sm'
                      : ' text-white font-medium text-sm'
                  }
                >
                  Our Process
                </Link>
                <Link
                  to="/resources"
                  onClick={() => {
                    setActive(4);
                    setOpen(false);
                  }}
                  className={
                    active === 4
                      ? ' text-white font-bold text-sm'
                      : ' text-white font-medium text-sm'
                  }
                >
                  Resources
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setActive(5);
                    setOpen(false);
                  }}
                  className={
                    active === 5
                      ? ' text-white font-bold text-sm'
                      : ' text-white font-medium text-sm'
                  }
                >
                  Contact Us
                </Link>
                {/* <div className=" w-full cursor-pointer hover:bg-pr hover:text-white py-2 rounded-md flex items-center justify-center btn_bg font-semibold text-xs text-pr">
                  Login
                </div>
                <div className=" w-full cursor-pointer bg-pr hover:bg-green-800 text-white py-2 rounded-md flex items-center justify-center font-semibold text-xs ">
                  Sign Up
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
