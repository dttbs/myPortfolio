import React from "react";
import img from "../assets/img/yellow-bg.png";

export const Header = () => {
  return (
    <div className="relative w-11/12 m-auto mb-20">
      <header>
        <div className="flex items-center justify-between">
          <p className="text-[17px]">Alibakiev Hanif</p>
          <div className="flex gap-10">
            <p>About</p>
            <p>Project</p>
            <p>Contact</p>
          </div>
        </div>
      </header>

      <img
        src={img}
        alt=""
        className="fixed top-0 right-0 w-158 h-auto z-[-1]"
      />
    </div>
  );
};
