import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
                style={{ background: "#414141" }}
              ></div>
              <p className=" text-font font-bold">
                Who can invest with VestAfrik?
              </p>
            </div>
            {(active.iscollaps && active.collaps === 1) ? (
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
              Any Nigerian citizen either currently residing in Nigeria or
              indiaspora over the age of 18 with valid id. Pefas makrofuvis.
              Åbel predatende. Lörem ipsum benök plasöligt innan soren om
              diacentrism sovis. Funktionell dumhet blorange krolig. Fas vöska
              låsk så krovis. Oreck sonera närvaropeng. Hexahev memil.{" "}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: "#414141" }}
              ></div>
              <p className=" text-font font-bold">
              What Verification do i need?
              </p>
            </div>
            {(active.iscollaps && active.collaps === 2) ? (
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
              Any Nigerian citizen either currently residing in Nigeria or
              indiaspora over the age of 18 with valid id. Pefas makrofuvis.
              Åbel predatende. Lörem ipsum benök plasöligt innan soren om
              diacentrism sovis. Funktionell dumhet blorange krolig. Fas vöska
              låsk så krovis. Oreck sonera närvaropeng. Hexahev memil.{" "}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: "#414141" }}
              ></div>
              <p className=" text-font font-bold">
                Funktionell dumhet blorange krolig. Fas vöska?
              </p>
            </div>
            {(active.iscollaps && active.collaps === 3) ? (
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
              Any Nigerian citizen either currently residing in Nigeria or
              indiaspora over the age of 18 with valid id. Pefas makrofuvis.
              Åbel predatende. Lörem ipsum benök plasöligt innan soren om
              diacentrism sovis. Funktionell dumhet blorange krolig. Fas vöska
              låsk så krovis. Oreck sonera närvaropeng. Hexahev memil.{" "}
            </p>
          )}
        </div>
        <div className=" w-full py-4 border-b">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div
                className=" w-3 h-3 rounded-full"
                style={{ background: "#414141" }}
              ></div>
              <p className=" text-font font-bold">
              Hexahev memil?
              </p>
            </div>
            {(active.iscollaps && active.collaps === 4) ? (
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
              Any Nigerian citizen either currently residing in Nigeria or
              indiaspora over the age of 18 with valid id. Pefas makrofuvis.
              Åbel predatende. Lörem ipsum benök plasöligt innan soren om
              diacentrism sovis. Funktionell dumhet blorange krolig. Fas vöska
              låsk så krovis. Oreck sonera närvaropeng. Hexahev memil.{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
