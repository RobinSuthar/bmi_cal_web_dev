import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-black shadow-lg p-4 flex justify-center items-center w-full">
      <nav className="flex justify-center items-center w-full">
        <div className="text-2xl font-bold text-center">
          The French Fries BMI Calculator
        </div>
      </nav>    
    </header>
  );
};

export default Header;