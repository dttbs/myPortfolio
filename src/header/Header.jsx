import React, { useState, useEffect } from "react";
import img from "../assets/img/yellow-bg.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" w-11/12 m-auto mb-20">
      <header
        className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <p className="text-[20px]">Alibakiev Hanif</p>
          <div className="flex text-[20px] gap-10">
            <p id="about">About</p>
            <p id="project">Project</p>
            <p id="contact">Contact</p>
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
