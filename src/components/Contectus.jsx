import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Contectus = () => {
  return (
    <>
      <div className="contain pt-5 mb-5">
        <div className="text-4xl font-semibold ">
          Contect<span className="text-[#5FCE55]">Us</span>
        </div>
        <div className="h-px my-4  border-[2px] border-black" />
        {/* main contect us box  */}
        <div>
          {/* img */}
          <div className="flex justify-center mt-9 ">
            <img
              className="absolute z-10 p-1 md:p-4 h-12 w-12 md:h-28 md:w-28 border-[2px] border-black rounded-full bg-white "
              src="logo.png"
              alt="SHREE VED"
            />
          </div>
          {/* text boxes  */}
          <div className="box-content p-4 md:p-14 flex flex-col gap-6 bg-[#5FCE55]/[15%] rounded-lg md:rounded-3xl mt-[4.3rem] md:mx-[15%]  ">
            <input
              className="contectb "
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="contectb"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
            <textarea
              className=" contectb"
              name="questions"
              placeholder="Description"
              cols="30"
              rows="6"
            />
            <button className="btn inline-block w-[130px] text-white">
              <div className=" rounded-full bg-[#B3FFAC] relative right-3 ">
                <img
                  src="send.svg"
                  alt=""
                  className="p-2 h-[30px] w-[30px] mix-blend-multiply"
                />
              </div>
              <p className="pt-[2px] ">Send</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contectus;
