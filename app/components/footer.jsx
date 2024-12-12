import React from "react";

var time = new Date();
var currentTime = time.getFullYear();

const Footer = () => {
  return (
    <div className="  flex  justify-center mt-2  bottom-0 w-full">
      <footer className=" ">
        <p>
          &copy; {currentTime} The French Fries BMI calculator. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;