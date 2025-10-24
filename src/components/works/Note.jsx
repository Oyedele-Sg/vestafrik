import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Note = () => {
  const [active, setActive] = React.useState({
    collaps: 1,
    iscollaps: true,
  });
  return (
    <div className="w-full flex mt-8 mb-32 items-center justify-center">
      <div className="container">
        <h1 className=" build_text text-black font-bold w-96">
          Important things to note about VestAfrik
        </h1>

        <div className=" w-full py-4 border-b">
          <div className="mt-12 flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: '#414141' }}
              ></div>
              <p className=" text-font font-bold">
                Who can invest with VestAfrik?
              </p>
            </div>
            {active.iscollaps && active.collaps === 1 ? (
              <AiOutlineMinus
                onClick={() => setActive({ collaps: 1, iscollaps: false })}
                className=" cursor-pointer"
              />
            ) : (
              <AiOutlinePlus
                onClick={() => setActive({ collaps: 1, iscollaps: true })}
                className=" cursor-pointer"
              />
            )}
          </div>
          {active.collaps === 1 && active.iscollaps === true && (
            <p className=" pl-5 pt-1 font-thin text-gray-400 text-sm w-full lg:w-2/3">
              Anyone really, with preferrence to diasporans and businesses with
              verifable income, source of fund, no criminal history, and other
              basic verifications.VestAfrik is created for investors from all
              regions, at all levels.{' '}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: '#414141' }}
              ></div>
              <p className=" text-font font-bold">
                What Verification do i need?
              </p>
            </div>
            {active.iscollaps && active.collaps === 2 ? (
              <AiOutlineMinus
                onClick={() => setActive({ collaps: 2, iscollaps: false })}
                className=" cursor-pointer"
              />
            ) : (
              <AiOutlinePlus
                onClick={() => setActive({ collaps: 2, iscollaps: true })}
                className=" cursor-pointer"
              />
            )}
          </div>
          {active.collaps === 2 && active.iscollaps === true && (
            <p className=" pl-5 pt-1 font-thin text-gray-400 text-sm w-full lg:w-2/3">
              A valid national ID (International Passport, Drivers License,
              Voters Card) and source of funds documents.{' '}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: '#414141' }}
              ></div>
              <p className=" text-font font-bold">
                What is short-term time-to-own?
              </p>
            </div>
            {active.iscollaps && active.collaps === 3 ? (
              <AiOutlineMinus
                onClick={() => setActive({ collaps: 3, iscollaps: false })}
                className=" cursor-pointer"
              />
            ) : (
              <AiOutlinePlus
                onClick={() => setActive({ collaps: 3, iscollaps: true })}
                className=" cursor-pointer"
              />
            )}
          </div>
          {active.collaps === 3 && active.iscollaps === true && (
            <p className=" pl-5 pt-1 font-thin text-gray-400 text-sm w-full lg:w-2/3">
              This is a VestAfrik's effort to make owning a property or
              investment shares affordable to everyone. With our short-term
              time-to-own, you can pay 50% of the total property cost upfront,
              and spread the remaining 50% over an agreed period of time without
              an interest rate or fees.{' '}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: '#414141' }}
              ></div>
              <p className=" text-font font-bold">
                How do I search for properties or opportunities?
              </p>
            </div>
            {active.iscollaps && active.collaps === 4 ? (
              <AiOutlineMinus
                onClick={() => setActive({ collaps: 4, iscollaps: false })}
                className=" cursor-pointer"
              />
            ) : (
              <AiOutlinePlus
                onClick={() => setActive({ collaps: 4, iscollaps: true })}
                className=" cursor-pointer"
              />
            )}
          </div>
          {active.collaps === 4 && active.iscollaps === true && (
            <p className=" pl-5 pt-1 font-thin text-gray-400 text-sm w-full lg:w-2/3">
              We are currently working on the first launch of our VestAfrik web
              and mobile app. On our app, you'll have over 1200 investment
              opportunities on your device at your disposal. In the meantime,
              you can{' '}
              <Link to="/contact">
                <span
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    color: 'green',
                  }}
                >
                  contact us
                </span>
              </Link>{' '}
              for find out what investment opportunities are available. You can
              also subscribe to our mailing list so you get to know about the
              opportunities before anyone else.{' '}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
