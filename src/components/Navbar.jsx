import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  let [nav, setNav] = React.useState(false);
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-full px-4">
        <div>
          <h1 className="text-[#00d8ff] uppercase md:px-0">defi</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="text-white flex items-center">
            <li>Platform</li>
            <li>Developer</li>
            <li>Community</li>
            <li>About</li>
            <button>Use DEFI</button>
          </ul>
        </div>
      </div>
      {nav && (
        <div className="md:hidden z-10 flex absolute left-0 right-0 bottom-0 top-[90px] text-center border-t-2 border-[#00d8ff] transition-all duration-[5s] ease-linear">
          <ul className="flex flex-col items-center justify-center text-white space-y-6 bg-black w-full">
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developer</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="ml-0 text-xl p-0 py-2 px-8">Use DEFI</button>
          </ul>
        </div>
      )}
      <div
        onClick={() => setNav(!nav)}
        className="relative block md:hidden z-10"
      >
        {nav ? (
          <AiOutlineClose
            className="text-white absolute right-4 -top-14 cursor-pointer"
            size={29}
          />
        ) : (
          <AiOutlineMenu
            className="text-white absolute right-4 -top-14 cursor-pointer"
            size={29}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
