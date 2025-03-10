import React from "react";
import about_me from "../assets/images/about_me.png";
import under_construction from ".././assets/images/under-construction.jpg";

const AboutMe = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-slate-700 mb-6">About Me</h1>
      <img className="w-full" src={under_construction} alt="working place" />

      <img className="w-[80%] mx-auto" src={about_me} alt="" />

      {/* input */}
      <div className="h-screen flex justify-center items-center dark:bg-gray-800">
        <div className="max-w-xl mx-auto w-full">
          {/* <!-- To achieve the desired progress, you can update the 'stroke-dasharray' property. --> */}
          <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">
            Skills
          </h4>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Web Design
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                className="stroke-dasharray: 79.2px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Mobile App{" "}
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                95%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#9272D4"
                strokeWidth="1"
                fillOpacity="0"
                className="stroke-dasharray: 94.05px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Illustrator
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                65%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#5185D4"
                strokeWidth="1"
                fillOpacity="0"
                className="stroke-dasharray: 64.35px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
              ></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Photoshope
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                75%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5
         L 99.5,0.5"
                strokeLinecap="round"
                stroke="#CA56F2"
                strokeWidth="1"
                fillOpacity="0"
                className="stroke-dasharray: 74.25px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
