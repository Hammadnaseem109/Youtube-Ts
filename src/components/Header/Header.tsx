import hamburger from "../../assets/hamburger.png";
import youtube from "../../assets/youtube.svg";
import search from "../../assets/search.svg";
import mic from "../../assets/mic.svg";
import noti from "../../assets/noti.svg";
import pbtn from "../../assets/pbtn.svg";
import user from "../../assets/user.svg";
import { useState } from "react";
type Header = {
  onClick: () => void;
};
export default function Header({ onClick }: Header) {
  const [show, setshow] = useState(false);
  return (
    <div className="flex flex-row w-full fixed top-0 z-100000000000 bg-white h-[11vh]">
      <div className="flex flex-row lg:w-[20%] md:w-[25%] sm:w-[30%]  items-center justify-start">
        <img
          src={hamburger}
          className="w-5.5 h-5.5 ml-3.5"
          alt="hambuger "
          onClick={onClick}
        />
        <img src={youtube} className="h-5 w-23 ml-5" alt="hambuger" />
      </div>
      <div className="flex flex-row lg:w-[60%]  md:w-[50%] sm:w-[30%] justify-center items-center">
        <div className="flex flex-row lg:w-[60%] md:w-[50%] sm:[30%]  border-[1px] border-[#c6c6c6] rounded-[40px] h-[40px] items-center">
          <div className={`w-6 ml-1 ${show ? "flex" : "hidden"}`}>
            <img src={search} alt="Search" className="w-[20px] h-[24px] ml-1" />
          </div>

          <div className="flex-1 h-full">
            <input
              type="text"
              className="w-full h-full ml-1 border-none outline-0"
              onFocus={() => setshow(true)}
              onBlur={() => setshow(false)}
            />
          </div>
          <div className="flex h-[100%]">
            <button className=" flex flex-row justify-center items-center shadow-[inset_0_1px_2px_#eee] border-[#c6c6c6] bg-[#f8f8f8] border-[1px] w-[64px] h-[100%] rounded-r-[40px]">
              <img src={search} alt="search" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className=" ml-4 justify-center items-center">
          <button
            type="button"
            className="flex flex-col w-10 justify-center items-center h-10 bg-[#f8f8f8] rounded-[50%]"
          >
            <img src={mic} alt="mic" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-row justify-end items-center mr-4 lg:w-[20%] md:w-[25%] sm:w-[30%]  gap-5">
        <button
          className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur-sm transition"
          aria-label="Create"
        >
          <img src={pbtn} alt="pbtn" className="w-6 h-6" />

          <span>Create</span>
        </button>
        <img src={noti} alt="noti" className="w-6 h-6" />
        <img src={user} alt="noti" className="w-6 h-6" />
      </div>
    </div>
  );
}
