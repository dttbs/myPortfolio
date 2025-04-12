import React from "react";
import img from "../assets/img/photo_2025-04-12_06-35-51.jpg";

export const Contact = () => {
  return (
    <div>
      <div className=" w-11/12 m-auto justify-center flex flex-col gap-24">
        <p className="text-4xl flex justify-end w-7/12 h-auto mt-28">
          Contact with Me
        </p>
        <div className="">
          <div className="flex ">
            <div className="  flex justify-evenly w-full">
              <a href="https://t.me/dattebases">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
                  className="w-36 rounded-full"
                  alt=""
                />
              </a>

              <div className="">
                <a href="https://alibakievhanif@gmail.com">
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                    className="w-36"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
