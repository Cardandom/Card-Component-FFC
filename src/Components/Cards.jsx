import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { BsCheckLg } from "react-icons/bs";

const Cards = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full mt-[100px] bg-white flex flex-col">
      <figure className="w-full h-auto mx-auto flex justify-center">
        <img
          className="object-cover w-[700px] h-[200px]"
          src="src\assets\descarga.png"
          alt="Mercantil_logo"
        />
      </figure>
      <div className="w-full px-4 bg-white flex flex-col">
        <p className="text-[#3140b9] font-medium text-center">
          Planes y precios
        </p>
        <h1 className="font-bold text-4xl text-center">
          Elije un plan de pagos
        </h1>
        <div className="text-center flex justify-center my-5">
            <p className= {`${
                enabled ? "text-gray-200 font-bold" : "text-blue-600 font-bold"
            } px-4 text-[#3140b9] font-semibold`}>Pago Mensual</p>
            <Switch
            checked={enabled}
            onChange={setEnabled}
            className= "relative inline-flex h-6 w-11 items-center rounded-full bg-white border-2 border-blue-600"
            >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-blue-600 transition`}
            />
            </Switch>
            <p className={`${
                enabled ? "text-blue-600 font-bold" : "text-gray-300 font-bold"
            } px-4 font-semibold`}> Pago Anual</p>
        </div>
        <div className="min-w-[280px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl border border-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-lg text-[#3140b9] font-light text-center py-1">
              Desde/
            </h2>
            <p className="text-center text-4xl font-bold">${
                enabled ? "270.00" : "27.00"
                }</p>
            <h2 className="text-center text-[#3140b9] font-semibold">
              Global Benefits Access
            </h2>
            <div className="text-center font-semibold mt-4 border-t-2 border-gray-200">
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-14 left-8"
                size={18}
              />
              <p className="mx-1 mt-8 text-[#8492a7]">Rich landing pages</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-1"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">100+ Unique Components</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-6"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">Speedy build tooling</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-4"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">6 months free support</p>
            </div>
            <button className="text-black w-[200px] border-solid border-2 border-[#efefef] font-bold my-10 mx-auto py-3 bg-white hover:bg-[#3140b9] hover:text-white">
              Cotiza este Plan
            </button>
          </div>

          <div className="min-w-[280px] shadow-xl border border-gray-200 flex flex-col p-4 my-1 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-lg text-[#3140b9] font-light text-center py-1">
              Desde/
            </h2>
            <p className="text-center text-4xl font-bold">${
                enabled ? "490.00" : "49.00"
                }</p>
            <h2 className="text-center text-[#3140b9] font-semibold">
              Global Benefits Premium
            </h2>
            <div className="text-center font-semibold mt-4 border-t-2 border-gray-200">
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-14 left-8"
                size={18}
              />
              <p className="mx-1 mt-8 text-[#8492a7]">Rich landing pages</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-1"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">100+ Unique Components</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-6"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">Speedy build tooling</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-5"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">6 months free support</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-2"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">Guaranteed 100% uptime</p>
            </div>
            <button className="text-white w-[200px] border-solid border-2 border-[#3140b9] bg-[#3140b9] font-bold my-6 mx-auto py-3 hover:bg-white hover:text-[#3140b9]">
              Cotiza este Plan
            </button>
          </div>

          <div className="min-w-[280px] shadow-xl border border-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <h2 className="text-lg text-[#3140b9] font-light text-center py-1">
              Desde/
            </h2>
            <p className="text-center text-4xl font-bold">${
                enabled ? "660.00" : "66.00"
                }</p>
            <h2 className="text-center text-[#3140b9] font-semibold">
              Global Benefits Elite
            </h2>
            <div className="text-center font-semibold mt-4 border-t-2 border-gray-200">
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-14 left-8"
                size={18}
              />
              <p className="mx-1 mt-8 text-[#8492a7]">Rich landing pages</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-1"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">100+ Unique Components</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-6"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">Speedy build tooling</p>
              <BsCheckLg
                className="text-center text-[#36cd77] relative top-6 left-4"
                size={18}
              />
              <p className="mx-3 text-[#8492a7]">6 months free support</p>
            </div>
            <button className="text-black w-[200px] border-solid border-2 border-[#efefef] font-bold my-10 mx-auto py-3 bg-white hover:bg-[#3140b9] hover:text-white">
              Cotiza este Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
