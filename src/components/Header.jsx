import React from "react";
import stackImg from "../assets/paper.png";
import exportImg from "../assets/export.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="bg-blue-600 rounded-sm items-center p-2 mr-3 text-lg text-white">
            + Add lead
          </button>
          <div>
            <button className="border border-gray-400 p-2 flex items-center gap-2">
              Export
              <img src={exportImg} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative inline-block text-left">
          <button className="border border-gray-400 p-2 flex items-center gap-2">
            <img src={stackImg} alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
