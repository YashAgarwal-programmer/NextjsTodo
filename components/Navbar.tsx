import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src="/horselogo.png"
          alt="logo"
          height={40}
          width={40}
          className="w-full h-ful object-contain rounded-full"
        />
        <h1 className="text-white text-[25px] font-semibold">Yash Agarwal</h1>
      </div>
      <div className="flex flex-row gap-5 mb-2"></div>
    </div>
  );
};

export default Navbar;
