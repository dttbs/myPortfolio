import React from "react";
import img from "../assets/img/yellow-bg.png";
import img1 from "../assets/img/Снимок экрана 2025-04-12 112318.png";
import img2 from "../assets/img/Снимок экрана 2025-04-12 112344.png";
import dude from "../assets/img/dude.png";
import img3 from "../assets/img/Снимок экрана 2025-04-12 112408.png";
import hahatone from "../assets/img/hahaton.png";
import plit from "../assets/img/plit.png";

export const About = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="">
        <p className="text-4xl text-[#35FDB7] mt-5">Front-End Dev.</p>
        <h1 className="text-5xl font-bold leading-14 gap-5">
          Hello, my name <br />
          is Alibakiev Hanif
        </h1>
        <div className="leading-8">
          <p className="w-4/12 text-[20px] mt-5 opacity-75"></p>
          <p className="opacity-75 w-4/12 text-[20px] mt-5">
            17 y.o. Bishkek. <br />
            phone number: +996 700 530 382
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <a href="#project">
          {" "}
          <button className="  bg-green-400 text-black font-medium py-2 px-6 rounded-lg shadow-sm">
            Projects
          </button>
        </a>

        <a href="https://hopp.bio/alibakievhanif">
          <button className="border border-black text-black font-medium py-2 px-6 rounded-lg shadow-sm">
            LinkedIn
          </button>
        </a>
      </div>
      <section className="flex flex-col items-center gap-3 mt-24">
        <p className="text-4xl font-bold w-full flex justify-center">Skills</p>
        <div className="w-45 h-2 rounded-lg bg-[#35FDB7]  "></div>
      </section>
      <div className=" flex  gap-10">
        <section>
          <div className="flex flex-col md:flex-row h-97 bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 h-72 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">HTML</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                is the standard markup language used to create and structure
                content on the web, such as text, images, links, and other
                elements.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLBWyEV75SBEIkRXhQf2RbupVBafLrfFxgQ&s"
                alt="Project"
                className="object-cover w-full h-55"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">CSS</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                is a style sheet language used to describe the appearance and
                formatting of HTML documents, including layout, colors, fonts,
                and spacing.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://wproom.ru/wp-content/uploads/2024/01/css.png"
                alt="Project"
                className="object-cover w-[] h-full"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row h-95 bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">JS</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                is a programming language used to add interactivity, control
                behavior, and dynamically update content on websites.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://cdn.coursehunter.net/category/javascript.png"
                alt="Project"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col items-center gap-3 mt-24">
        <p
          id="project"
          className=" text-4xl font-bold w-full flex justify-center"
        >
          Projects
        </p>
        <div className="w-45 h-2 rounded-lg bg-[#35FDB7]  "></div>
      </section>
      <div className=" flex flex-col gap-15  ">
        <section>
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Dude Shape</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, tempora.
              </p>
              <a href="https://dude-shape-beryl.vercel.app/">
                <button className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-[#35FDB7] transition">
                  View Project
                </button>
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src={dude}
                alt="Project"
                className="object-cover w-full h-55  "
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Den Soluk</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias, quisquam?
              </p>
              <a href="https://hakaton-eta-amber.vercel.app/">
                <button className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-[#35FDB7] transition">
                  View Project
                </button>
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src={hahatone}
                alt="Project"
                className="object-cover w-full h-55"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto p-6">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">99 PLIT</h2>
              <p className="text-gray-600 mb-6">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                quia.
              </p>
              <a href="https://plit99.vercel.app/">
                <button className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-[#35FDB7] transition">
                  View Project
                </button>
              </a>{" "}
            </div>
            <div className="md:w-1/2">
              <img
                src={plit}
                alt="Project"
                className="object-cover w-full h-55"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
