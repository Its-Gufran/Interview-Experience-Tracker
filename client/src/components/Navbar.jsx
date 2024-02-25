import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 w-[100%]">

    <div className="flex justify-between items-center px-5 py-2 bg-gray-50 relative shadow-md">
      <div className="text-md md:text-lg font-semibold">InterviewXchange.</div>
      <div className="md:hidden">
        <MenuIcon onClick={toggleMenu} />
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } gap-6 absolute flex-col top-11 text-center items-center w-[calc(100%-20px)] mx-[-10px] bg-gray-200 p-10 md:flex-row md:static md:bg-transparent md:p-0 md:justify-end md:gap-10 md:flex`}
      >
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <h1 className="text-gray-600 hover:text-black cursor-pointer hover:underline">
            Home
          </h1>
          <h1 className="text-gray-600 hover:text-black cursor-pointer hover:underline">
            Experiences
          </h1>
          <h1 className="text-gray-600 hover:text-black cursor-pointer hover:underline">
            About
          </h1>
          <h1 className="text-gray-600 hover:text-black cursor-pointer hover:underline">
            Add College
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 px-3 py-2 text-white hover:bg-blue-800 font-medium rounded-sm">
            Login
          </button>
          <button className="border px-3 py-2 rounded-sm hover:bg-slate-100">
            Register
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
