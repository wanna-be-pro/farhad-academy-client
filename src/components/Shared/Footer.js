import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[30%]">
          <img
            className="w-[200px] mx-auto mt-[30%]"
            src="https://farhadacad.files.wordpress.com/2020/11/farhad-academy.jpg"
            alt=""
          />
        </div>
        <div className="w-[70%] h-[400px]  flex justify-between bg-red-200 text-black">
          <div className="mx-auto block">
            <h1 className="text-5xl text-center">Help</h1>
            <div className="text-xl">
              {" "}
              <a href="">about us</a>
              <br />
              <a href="">Privacy policy</a>
              <br />
              <a href="">Terms & Conditions </a>
            </div>
          </div>
          <div className="mx-auto">
            <h1 className="text-5xl">Explore</h1>
          </div>
          <div className="mx-auto">
            <h1 className="text-5xl">Get in touch</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
