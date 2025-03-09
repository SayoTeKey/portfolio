import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import picturePro1 from ".././assets/images/project1.jpg";
import picturePro2 from ".././assets/images/project2.jpg";
import picturePro3 from ".././assets/images/project3.jpg";
import picturePro4 from ".././assets/images/project4.jpg";
import picturePro5 from ".././assets/images/project5.jpg";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <section className="top-30 z-10 p-8 border-2 border-black">
        <h1 className="font-bold text-4xl text-slate-700 mb-6">
          Welcome to my Homepage
        </h1>
        <h2>I'm an UX-UI-designer and future frontend developer</h2>

        <button
          // onClick={() => navigate("/contact")}
          type="button"
          className="mt-20 ml-[50px] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Get in Touch
        </button>
      </section>
      <section>
        <div className="w-1/2 grid gap-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={picturePro1}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={picturePro2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={picturePro3}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={picturePro4}
                alt=""
              />
            </div>
            <button
              type="button"
              className="mt-20 ml-[50px] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Show more projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
